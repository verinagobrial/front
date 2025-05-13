
        // Tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
    
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Update active tab button
                    tabButtons.forEach(btn => {
                        btn.classList.remove('active', 'text-blue-600', 'bg-blue-50');
                        btn.classList.add('text-gray-600');
                    });
                    this.classList.add('active', 'text-blue-600', 'bg-blue-50');
                    this.classList.remove('text-gray-600');
                    
                    // Show corresponding content
                    tabContents.forEach(content => {
                        content.classList.add('hidden');
                        content.classList.remove('active');
                    });
                    document.getElementById(tabId).classList.remove('hidden');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });
    
       