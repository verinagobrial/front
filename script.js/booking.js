document.addEventListener('DOMContentLoaded', function() {
    // Package selection in form
    const packageSelect = document.getElementById('package-select');
    const customContainer = document.getElementById('custom-package-container');
    const modalTotal = document.getElementById('modal-total');
    const customPriceInput = document.getElementById('custom-price');

    if (packageSelect) {
        packageSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                customContainer.classList.remove('hidden');
                modalTotal.textContent = '$0';
            } else {
                customContainer.classList.add('hidden');
                // Extract price from option text (format: "Package Name ($XXX)")
                const priceMatch = this.options[this.selectedIndex].text.match(/\$([\d,]+)/);
                const price = priceMatch ? priceMatch[1].replace(',', '') : '0';
                modalTotal.textContent = '$' + price;
            }
        });
    }

    if (customPriceInput) {
        customPriceInput.addEventListener('input', function() {
            if (packageSelect && packageSelect.value === 'custom') {
                modalTotal.textContent = '$' + (this.value || '0');
            }
        });
    }

    // Package booking buttons and modal
    const packageButtons = document.querySelectorAll('.package-book');
    const bookingModal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    const packageIdInput = document.getElementById('package-id');
    const packagePriceInput = document.getElementById('package-price');
    
    if (packageButtons.length && bookingModal) {
        packageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const packageId = this.getAttribute('data-package');
                const packagePrice = this.getAttribute('data-price');
                
                if (packageIdInput) packageIdInput.value = packageId;
                if (packagePriceInput) packagePriceInput.value = packagePrice;
                if (modalTotal) modalTotal.textContent = `$${packagePrice}`;
                
                bookingModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (bookingModal) bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
});

      // Custom package builder
     // Toggle dropdowns
    function toggleDropdown(type) {
        const dropdown = document.getElementById(`${type}-dropdown`);
        const toggle = document.querySelector(`#${type}-dropdown`).previousElementSibling.querySelector('i');
        
        dropdown.classList.toggle('hidden');
        toggle.classList.toggle('rotate-180');
    }
    
    // Track selected items and calculate total
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedItemsContainer = document.getElementById('selected-items');
    const emptyMessage = document.getElementById('empty-message');
    const subtotalElement = document.getElementById('subtotal');
    const serviceFeeElement = document.getElementById('service-fee');
    const totalElement = document.getElementById('total');
    const bookButton = document.getElementById('book-button');
    
    let selectedItems = [];
    let subtotal = 0;
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            
            if (this.checked) {
                selectedItems.push({ name, price });
            } else {
                selectedItems = selectedItems.filter(item => item.name !== name);
            }
            
            updateSummary();
        });
    });
    
    function updateSummary() {
        // Calculate subtotal
        subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
        
        // Calculate service fee (10% of subtotal)
        const serviceFee = Math.round(subtotal * 0.1);
        
        // Update UI
        if (selectedItems.length > 0) {
            emptyMessage.style.display = 'none';
            
            let itemsHTML = '';
            selectedItems.forEach(item => {
                itemsHTML += `
                    <div class="flex justify-between py-2 border-b">
                        <span>${item.name}</span>
                        <span>$${item.price}</span>
                    </div>
                `;
            });
            selectedItemsContainer.innerHTML = itemsHTML;
            
            bookButton.disabled = false;
        } else {
            emptyMessage.style.display = 'block';
            selectedItemsContainer.innerHTML = '';
            bookButton.disabled = true;
        }
        
        subtotalElement.textContent = `$${subtotal}`;
        serviceFeeElement.textContent = `$${serviceFee}`;
        totalElement.textContent = `$${subtotal + serviceFee}`;
    }
    
    // Book button functionality
    bookButton.addEventListener('click', function() {
        alert('Your custom package has been booked! Total: $' + (subtotal + Math.round(subtotal * 0.1)));
        // Here you would typically send the data to your backend
    });