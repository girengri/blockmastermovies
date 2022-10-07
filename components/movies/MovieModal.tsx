import { useContext } from "react";

import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { ModalContext, MovieModalContext } from "../../context";

export const MovieModal = () => {
    const { isModalOpen } = useContext(ModalContext);
    const { movie } = useContext(MovieModalContext);
    return (
        <Modal isOpen={isModalOpen}>
            <ModalHeader>
                <div>
                    <picture>
                        <img width={300} src="" alt="" />
                    </picture>

                    <p className="puntuacionCard"></p>
                </div>
            </ModalHeader>

            <ModalBody>
                <div className="cerrarbtn">
                    <picture>
                        <img
                            src="https://res.cloudinary.com/girengri/image/upload/v1644878712/blockmasterimagenes/icons8-macos-close-30_l9i6zs.png"
                            alt="cerrar"
                        />
                    </picture>
                </div>

                <div className="centrarInfoPrincipalModal">
                    <h2>{movie.title}</h2>
                    <p></p>
                </div>

                <div className="centrarInfoModal">
                    <h5></h5>
                    <h5></h5>
                    <h5></h5>
                </div>
            </ModalBody>
        </Modal>
    );
};
