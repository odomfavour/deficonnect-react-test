import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import { useWeb3React } from "@web3-react/core";
import { BigNumber, Contract } from "ethers";
import { Modal } from "react-bootstrap";
import { getDetailLabel } from "../Defifarm/FarmData";
import "./stakingModal.css";
import dfcAbi from "../../web3/abi/dfc";
import { defiFarmContractAddress } from "../../web3/contracts";
import defiFarmAbi from "../../web3/abi/defiFarm";

const StakingModal = ({ show, handleClose, farmInfo }) => {
  const [tokenBalance, setTokenBalance] = useState('0.0');
  const {library, account} = useWeb3React();
  const [amount, setAmount] = useState('')
  const search = useLocation().search;

  useEffect(() => {
      const fn = async () => {
        if(!library) return;
        const contract = new Contract(
            farmInfo.tokenAddress,
            dfcAbi,
            library.getSigner()
          );
          const balance = await contract.balanceOf(account);
          let decimal = parseInt(await contract.decimals())
          setTokenBalance((parseInt(balance) / 10**decimal).toFixed(2));
      }
      fn()
  })

  const setMaxAmount = () => {
      if (!tokenBalance) return
      setAmount(tokenBalance)
  }

  const stake = async () => {
    if(!library) return;
    let referrer = new URLSearchParams(search).get('ref');
    if (!referrer || referrer === '') {
        referrer = account
    }

    const contract = new Contract(
        farmInfo.tokenAddress,
        dfcAbi,
        library.getSigner()
      );
      let decimal = parseInt(await contract.decimals())
      
    const defiFarmContract = new Contract(
        defiFarmContractAddress,
        defiFarmAbi,
        library.getSigner()
      );

    const amountFixed = parseInt(amount*1e6)
    const tokenAmount = BigNumber.from(amountFixed.toString()).mul(10**(decimal-6))
    await defiFarmContract.stake(referrer, tokenAmount, farmInfo.pool)
    // TODO: confirm transaction status before closing
    handleClose()
  }

  return (
    <Modal
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="staking-modal-sizes-title-lg"
        centered
      >
        <div className="fynpGN">
            <div className="sc-Axmtr jZEXbQ">
              <div className="sc-fznyAO hVVFzA">
                Deposit {getDetailLabel(farmInfo)}
              </div>
              <div className="sc-fzoydu ctZjfV">
                <div className="sc-fzpkqZ dwlJiY">
                  {tokenBalance} {getDetailLabel(farmInfo)} Available
                </div>
                <div className="sc-fzqAbL kXVCLD">
                  <input
                    placeholder="0"
                    className="sc-fzqMAW iYbEPM"
                    value={amount} onChange={env => {setAmount(env.target.value)}}
                  ></input>
                  <div className="sc-fzoYHE GXatJ">
                    <span className="sc-fznAgC bCQUzY">{getDetailLabel(farmInfo)}</span>
                    <div className="sc-fzoJMP fQymcc"></div>
                    <div>
                      <button
                        color="rgb(67,210,255)"
                        fontSize="12"
                        size="36"
                        className="sc-AxhCb etxXUI"
                        onClick={setMaxAmount}
                      >
                        Max
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-fzoLsD RHdRK">
                <div className="sc-fzpans cKJzHK">
                  <button onClick={handleClose}
                    color="#fafafa"
                    fontSize="12"
                    size="56"
                    className="sc-AxhCb etxXUI"
                  >
                    Cancel
                  </button>
                </div>
                <div className="sc-fzozJi dZjuQi" size="24"></div>
                <div className="sc-fzpans cKJzHK">
                  <button onClick={stake} disabled={parseFloat(amount) === 0 || !library}
                    color="rgb(67,210,255)"
                    fontSize="12"
                    size="56"
                    className="sc-AxhCb etxXUI"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Modal>
  );
};

export default StakingModal;
