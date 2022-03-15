import React from "react";
import { Modal } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import "./stakingModal.css";

const StakingModal = ({ show, handleClose }) => {
  // const [lgShow, setLgShow] = useState(false);
  return (
    <section>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <div className="fynpGN">
            <div class="sc-Axmtr jZEXbQ">
              <div class="sc-fznyAO hVVFzA">
                Deposit BFI/BNB PANCAKE LP Tokens
              </div>
              <div class="sc-fzoydu ctZjfV">
                <div class="sc-fzpkqZ dwlJiY">
                  0.000000000000000000 BFI/BNB PANCAKE LP Available
                </div>
                <div class="sc-fzqAbL kXVCLD">
                  <input
                    placeholder="0"
                    class="sc-fzqMAW iYbEPM"
                    value=""
                  ></input>
                  <div class="sc-fzoYHE GXatJ">
                    <span class="sc-fznAgC bCQUzY">BFI/BNB PANCAKE LP</span>
                    <div class="sc-fzoJMP fQymcc"></div>
                    <div>
                      <button
                        color="rgb(67,210,255)"
                        font-size="12"
                        size="36"
                        class="sc-AxhCb etxXUI"
                      >
                        Max
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-fzoLsD RHdRK">
                <div class="sc-fzpans cKJzHK">
                  <button onClick={handleClose}
                    color="#fafafa"
                    font-size="12"
                    size="56"
                    class="sc-AxhCb etxXUI"
                  >
                    Cancel
                  </button>
                </div>
                <div class="sc-fzozJi dZjuQi" size="24"></div>
                <div class="sc-fzpans cKJzHK">
                  <button
                    color="rgb(67,210,255)"
                    font-size="12"
                    size="56"
                    class="sc-AxhCb etxXUI"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Modal>
    </section>
  );
};

export default StakingModal;
