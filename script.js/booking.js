// package select in form
document.getElementById('package-select').addEventListener('change', function() {
    const customContainer = document.getElementById('custom-package-container');
    if (this.value === 'custom') {
        customContainer.classList.remove('hidden');
        document.getElementById('modal-total').textContent = '$0';
    } else {
        customContainer.classList.add('hidden');
        // Update price based on selection (example logic)
        const prices = {
            'alexandria-highlights': 120,
            'mediterranean-cruise': 250,
            'historical-wonders': 180
        };
        if (prices[this.value]) {
            document.getElementById('modal-total').textContent = '$' + prices[this.value];
        }
    }
});

document.getElementById('custom-price')?.addEventListener('input', function() {
    if (document.getElementById('package-select').value === 'custom') {
        document.getElementById('modal-total').textContent = '$' + (this.value || '0');
    }
});


    document.addEventListener('DOMContentLoaded', function() {
        // Package booking buttons
        const packageButtons = document.querySelectorAll('.package-book');
        const bookingModal = document.getElementById('booking-modal');
        const closeModal = document.getElementById('close-modal');
        const packageIdInput = document.getElementById('package-id');
        const packagePriceInput = document.getElementById('package-price');
        const modalTotal = document.getElementById('modal-total');
        
        packageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const packageId = this.getAttribute('data-package');
                const packagePrice = this.getAttribute('data-price');
                
                packageIdInput.value = packageId;
                packagePriceInput.value = packagePrice;
                modalTotal.textContent = `$${packagePrice}`;
                
                bookingModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', function() {
            bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        // Custom package builder
        const activityCheckboxes = document.querySelectorAll('.activity-checkbox');
        const customBookBtn = document.getElementById('custom-book-btn');
        const selectedActivitiesDiv = document.getElementById('selected-activities');
        const subtotalSpan = document.getElementById('subtotal');
        const serviceFeeSpan = document.getElementById('service-fee');
        const totalPriceSpan = document.getElementById('total-price');
        
        activityCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateCustomPackage);
        });
        
        function updateCustomPackage() {
            let selected = [];
            let subtotal = 0;
            
            activityCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const activity = checkbox.getAttribute('data-activity');
                    const price = parseFloat(checkbox.getAttribute('data-price'));
                    subtotal += price;
                    
                    let activityName = '';
                    switch(activity) {
                        case 'city-tour': activityName = 'City Highlights Tour'; break;
                        case 'sunset-cruise': activityName = 'Sunset Cruise'; break;
                        case 'historical-tour': activityName = 'Historical Sites Tour'; break;
                        case 'food-tour': activityName = 'Food Tour'; break;
                    }
                    
                    selected.push({
                        name: activityName,
                        price: price
                    });
                }
            });
            
            // Update UI
            if (selected.length > 0) {
                let html = '';
                selected.forEach(item => {
                    html += `<div class="flex justify-between py-2 border-b border-gray-200">
                                <span>${item.name}</span>
                                <span class="font-semibold">$${item.price}</span>
                            </div>`;
                });
                selectedActivitiesDiv.innerHTML = html;
                customBookBtn.disabled = false;
            } else {
                selectedActivitiesDiv.innerHTML = '<p class="text-gray-600">No activities selected yet</p>';
                customBookBtn.disabled = true;
            }
            
            const serviceFee = subtotal * 0.1; // 10% service fee
            const total = subtotal + serviceFee;
            
            subtotalSpan.textContent = `$${subtotal.toFixed(2)}`;
            serviceFeeSpan.textContent = `$${serviceFee.toFixed(2)}`;
            totalPriceSpan.textContent = `$${total.toFixed(2)}`;
        }
        
        // Custom package booking
        customBookBtn.addEventListener('click', function() {
            const total = totalPriceSpan.textContent;
            modalTotal.textContent = total;
            
            packageIdInput.value = 'CUSTOM';
            packagePriceInput.value = total.replace('$', '');
            
            bookingModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        // Form submission
        const bookingForm = document.getElementById('booking-form');
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the data to your server
            const packageId = packageIdInput.value;
            const packagePrice = packagePriceInput.value;
            const formData = new FormData(this);
            
            // Simulate successful booking
            bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            
            alert(`Thank you for booking ${packageId}! A confirmation has been sent to your email.`);
            this.reset();
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

      
    });