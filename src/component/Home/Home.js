import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Home = () => {
    // products to be rendered on the UI
    const [services,setServices]=useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);

            });
    }, []);

    

    return (
        <div>
            
             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className="bg-dark" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="bg-dark"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div  className="carousel-inner">
                    <div className="carousel-item active">
                    <img height="500px" src="https://i.ibb.co/ySm27Fq/download-2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img height="500px" src="https://i.ibb.co/vXDFPVL/download.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img height="500px" src="https://i.ibb.co/tz6Xw31/download-1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
        </div>

                {/* dispaly data */}
                <div className="w-75 mx-auto mt-5 ">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                        {
                            services.map(service=><Services
                                key={service.key}
                                service={service}
                          
                            >
                            </Services>)
                            
                        }
                    </div>
                </div>

                            {/* healthcare */}
            <div className="text-center mt-5">
                <h1>Welcome to HEALTHCARE AGENCY</h1>
                <h3>Our medical specialists care about you & your family’s health</h3>
                <div>
                <div className="card-deck d-flex w-75 mx-auto mt-5 row row-cols-1 row-cols-md-3 g-4 mt-5">
                
                        <div className="card  ">
                           <div className="w-25 mx-auto">
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hospital" className="svg-inline--fa fa-hospital" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M336 .0145h-288c-26.51 0-48 21.49-48 48v432c0 17.67 14.33 32 32 32l112-.0073v-79.99c0-26.51 21.49-48.01 48-48.01s48 21.5 48 48.01v79.99l112 .0073c17.67 0 32-14.33 32-32v-432C384 21.5 362.5 .0145 336 .0145zM128 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304zM224 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304zM247.7 153.6h-30.08v30.08c0 4.594-3.727 8.32-8.32 8.32H174.7c-4.594 0-8.32-3.727-8.32-8.32V153.6H136.3C131.7 153.6 128 149.9 128 145.3V110.7c0-4.594 3.727-8.32 8.32-8.32h30.08V72.34c0-4.594 3.727-8.32 8.32-8.32h34.56c4.594 0 8.32 3.727 8.32 8.32v30.08h30.08C252.3 102.4 256 106.1 256 110.7v34.56C256 149.9 252.3 153.6 247.7 153.6zM320 304c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-32c0-8.838 7.164-16 16-16h32c8.836 0 16 7.162 16 16V304z"></path></svg>
                           </div>
                            <div class ="card-body">
                            <h5 class ="card-title">Hospital </h5>
                            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card   ">
                            <div className="w-50 mx-auto">
                            <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck-medical" className="svg-inline--fa fa-truck-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464zM112 176C112 184.8 119.2 192 128 192H176V240C176 248.8 183.2 256 192 256H224C232.8 256 240 248.8 240 240V192H288C296.8 192 304 184.8 304 176V144C304 135.2 296.8 128 288 128H240V80C240 71.16 232.8 64 224 64H192C183.2 64 176 71.16 176 80V128H128C119.2 128 112 135.2 112 144V176z"></path></svg>
                            </div>
                        
                            <div class ="card-body">
                            <h5 class ="card-title">Ambulance</h5>
                            <p class ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="card ">
                            <div class ="card-body">
                                <div className="w-25 mx-auto">
                                <svg width="100px"margin="0 auto" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stethoscope" className="svg-inline--fa fa-stethoscope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M480 112c-44.18 0-80 35.82-80 80c0 32.84 19.81 60.98 48.11 73.31v78.7c0 57.25-50.25 104-112 104c-60 0-109.3-44.1-111.9-99.23C296.1 333.8 352 269.3 352 191.1V36.59c0-11.38-8.15-21.38-19.28-23.5L269.8 .4775c-13-2.625-25.54 5.766-28.16 18.77L238.4 34.99c-2.625 13 5.812 25.59 18.81 28.22l30.69 6.059L287.9 190.7c0 52.88-42.13 96.63-95.13 97.13c-53.38 .5-96.81-42.56-96.81-95.93L95.89 69.37l30.72-6.112c13-2.5 21.41-15.15 18.78-28.15L142.3 19.37c-2.5-13-15.15-21.41-28.15-18.78L51.28 12.99C40.15 15.24 32 25.09 32 36.59v155.4c0 77.25 55.11 142 128.1 156.8C162.7 439.3 240.6 512 336 512c97 0 176-75.37 176-168V265.3c28.23-12.36 48-40.46 48-73.25C560 147.8 524.2 112 480 112zM480 216c-13.25 0-24-10.75-24-24S466.7 168 480 168S504 178.7 504 192S493.3 216 480 216z"></path></svg>
                                </div>
                            <h5 class ="card-title">Medical</h5>
                            <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medical Departments */}

            <div className="w-75 mx-auto mt-5">
                <h1 className="text-center">Medical Departments</h1>

                <div class="card-deck row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div class="card">
                        <div className="w-50 mx-auto">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="x-ray" class="svg-inline--fa fa-x-ray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M208 352C199.2 352 192 359.2 192 368C192 376.8 199.2 384 208 384S224 376.8 224 368C224 359.2 216.8 352 208 352zM304 384c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16S288 359.2 288 368C288 376.8 295.2 384 304 384zM496 96C504.8 96 512 88.84 512 80v-32C512 39.16 504.8 32 496 32h-480C7.164 32 0 39.16 0 48v32C0 88.84 7.164 96 16 96H32v320H16C7.164 416 0 423.2 0 432v32C0 472.8 7.164 480 16 480h480c8.836 0 16-7.164 16-16v-32c0-8.836-7.164-16-16-16H480V96H496zM416 216C416 220.4 412.4 224 408 224H272v32h104C380.4 256 384 259.6 384 264v16C384 284.4 380.4 288 376 288H272v32h69.33c25.56 0 40.8 28.48 26.62 49.75l-21.33 32C340.7 410.7 330.7 416 319.1 416H192c-10.7 0-20.69-5.347-26.62-14.25l-21.33-32C129.9 348.5 145.1 320 170.7 320H240V288H136C131.6 288 128 284.4 128 280v-16C128 259.6 131.6 256 136 256H240V224H104C99.6 224 96 220.4 96 216v-16C96 195.6 99.6 192 104 192H240V160H136C131.6 160 128 156.4 128 152v-16C128 131.6 131.6 128 136 128H240V104C240 99.6 243.6 96 248 96h16c4.4 0 8 3.6 8 8V128h104C380.4 128 384 131.6 384 136v16C384 156.4 380.4 160 376 160H272v32h136C412.4 192 416 195.6 416 200V216z"></path></svg>
                        </div>
                        <div class ="card-body">
                        </div>
                        <div class ="card-footer">
                        <h5 class ="card-title">Cardiology</h5>
                        </div>
                    </div>
                    <div class="card">
                    <div className="w-50 mx-auto">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lungs" class="svg-inline--fa fa-lungs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M640 419.8c0 61.25-62.5 105.5-125.3 88.63l-59.53-15.88c-42.12-11.38-71.25-47.5-71.25-88.63L384 316.4l85.88 57.25c3.625 2.375 8.625 1.375 11-2.25l8.875-13.37c2.5-3.625 1.5-8.625-2.125-11L320 235.3l-167.6 111.8c-1.75 1.125-3 3-3.375 5c-.375 2.125 0 4.25 1.25 6l8.875 13.37c1.125 1.75 3 3 5 3.375c2.125 .375 4.25 0 6-1.125L256 316.4l.0313 87.5c0 41.13-29.12 77.25-71.25 88.63l-59.53 15.88C62.5 525.3 0 481 0 419.8c0-10 1.25-19.88 3.875-29.63C25.5 308.9 59.91 231 105.9 159.1c22.12-34.63 36.12-63.13 80.12-63.13C224.7 96 256 125.4 256 161.8v60.1l32.88-21.97C293.4 196.9 296 192 296 186.6V16C296 7.125 303.1 0 312 0h16c8.875 0 16 7.125 16 16v170.6c0 5.375 2.625 10.25 7.125 13.25L384 221.8v-60.1c0-36.38 31.34-65.75 69.97-65.75c43.1 0 58 28.5 80.13 63.13c46 71.88 80.41 149.8 102 231C638.8 399.9 640 409.8 640 419.8z"></path></svg>
                        </div>
                        
                        <div class ="card-body">
                        </div>
                        <div class ="card-footer">
                        <h5 class ="card-title">Pulmonology</h5>
                        </div>
                    </div>
                    <div class="card">
                    <div className="w-50 mx-auto">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" class="svg-inline--fa fa-brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z"></path></svg>
                        </div>
                       
                        <div class ="card-body">
                        </div>
                        <div class ="card-footer">
                        <h5 class ="card-title">Neurology</h5>
                        </div>
                    </div>
                </div>
            </div>




                
        </div>
    );
};

export default Home;