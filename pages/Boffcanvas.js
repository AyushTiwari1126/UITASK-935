import React from 'react'
import Sidebar from './Sidebar'

const Boffcanvas = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light fixed-bottom">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NiceAdmin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start text-bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">

                        <Sidebar />

                        {/* <div class="offcanvas-header"> */}
                        {/* <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Sidebar</h5>
                            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

                        {/* </div> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Boffcanvas