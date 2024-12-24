const SlidingPhotosSection = () => {
    return `
        <section class="sliding-photos-section">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <img src="../../matoke.jpg" class="d-block w-100" alt="Slide 1">
                        <div class="carousel-caption">
                            <h3>Shop the Best Deals</h3>
                            <button class="btn btn-primary">Start Shopping</button>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <img src="../../potato.jpg" class="d-block w-100" alt="Slide 2">
                        <div class="carousel-caption">
                            <h3>Explore New Arrivals</h3>
                            <button class="btn btn-primary">Start Shopping</button>
                        </div>
                    </div>
                    <!-- Slide 3 -->
                    <div class="carousel-item">
                        <img src="../../wheat.jpg" class="d-block w-100" alt="Slide 3">
                        <div class="carousel-caption">
                            <h3>Exclusive Offers Await</h3>
                            <button class="btn btn-primary">Start Shopping</button>
                        </div>
                    </div>
                </div>
                <!-- Carousel Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    `;
};

export { SlidingPhotosSection };
