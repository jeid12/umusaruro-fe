const SearchSection = () => {
    const currentDate = new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return `
        <section class="search-section">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <!-- Search Input and Button -->
                    <div class="col-md-6">
                        <div class="search-container">
                            <input type="text" class="form-control search-input" placeholder="Search here...">
                            <button class="btn btn-primary search-button">Search</button>
                        </div>
                    </div>
                    <!-- Date Button -->
                    <div class="col-md-4">
                        <button class="btn btn-date w-100">Today is ${currentDate}</button>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export { SearchSection };
