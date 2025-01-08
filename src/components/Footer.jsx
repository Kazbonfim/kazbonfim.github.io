import React from 'react';

export const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Kazbonfim ❤️</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-body-secondary" href="https://x.com/Kazbonfim" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.03 0 9.345-5.003 9.345-9.332 0-.142 0-.284-.01-.425A6.673 6.673 0 0 0 16 3.542a6.546 6.546 0 0 1-1.889.518A3.276 3.276 0 0 0 15.557 2a6.551 6.551 0 0 1-2.084.796A3.287 3.287 0 0 0 11.038 0a3.287 3.287 0 0 0-3.29 3.29c0 .257.032.507.095.746A9.357 9.357 0 0 1 1.114 2.16a3.281 3.281 0 0 0-.445 1.656c0 1.145.582 2.15 1.467 2.742a3.266 3.266 0 0 1-1.487-.411v.041c0 1.597 1.136 2.94 2.645 3.244a3.276 3.276 0 0 1-1.478.056c.419 1.31 1.64 2.26 3.078 2.286a6.575 6.575 0 0 1-4.03 1.387c.38.24.832.379 1.304.379z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
