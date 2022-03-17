import { useEffect, useState } from "react";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Modal } from "react-bootstrap";
import { getDetailLabel } from "../Defifarm/FarmData";
import "./myPositionModal.css";
import { defiFarmContractAddress } from "../../web3/contracts";
import defiFarmAbi from "../../web3/abi/defiFarm";

const FarmItem = ({ farmInfo, data, unstake }) => {
  const amount = parseInt(data.amount)/1e18
  const date = new Date(parseInt(data.startDate)*1000)
  const dateStr = date.toDateString() + ' ' +  date.toLocaleTimeString()

  const dueDate = new Date(Number(date))
  dueDate.setDate(date.getDate() + farmInfo.days)
  const dueDateStr = dueDate.toDateString() + ' ' +  dueDate.toLocaleTimeString()

  return (
    <tr>
        <td>{dateStr}</td>
        <td>{amount} {farmInfo.symbol}</td>
        <td>{dueDateStr}</td>
        <td>
          <button onClick={unstake}>unstake</button>
        </td>
      </tr>
  );
};

const MyPositionModal = ({ show, handleClose, farmInfo }) => {
  const { library, account } = useWeb3React();
  const [items, setItems] = useState([]);

  const unstake = async (index) => {
    const defiFarmContract = new Contract(
      defiFarmContractAddress,
      defiFarmAbi,
      library.getSigner()
    );
    await defiFarmContract.unstake(farmInfo.pool, index)
    setItems(items.filter(d => d.index !== index))
    handleClose()
  }

  useEffect(() => {
    if (!library || items.length > 0) return;

    const defiFarmContract = new Contract(
      defiFarmContractAddress,
      defiFarmAbi,
      library.getSigner()
    );

    const buildUI = async () => {
      const count = parseInt(
        await defiFarmContract.stakeCount(account, farmInfo.pool)
      );
      const records = []
      for (let i = count-1; i >= 0; i--) {
        const data = await defiFarmContract.stakeInfo(account, farmInfo.pool, i)
        records.push({amount: data.amount, startDate: data.startDate, unstaked: data.unstaked, index: i})
      }
      setItems(records)
    };

    buildUI();
  });

  return (
    <Modal
      size="md"
      show={show}
      onHide={handleClose}
      aria-labelledby="positions-modal-sizes-title-lg"
      centered
    >
      <div className="fynpGN">
        <div className="sc-Axmtr jZEXbQ">
          <div className="sc-fznyAO hVVFzA">
            My {getDetailLabel(farmInfo)} Positions
          </div>
          <div className="sc-fzoydu ctZjfV">
            <table className="table" style={{ color: "#fff" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
              {items.filter(d=> !d.unstaked).map((data, i) => 
                <FarmItem unstake={() => {unstake(data.index)}} farmInfo={farmInfo} data={data} key={i} />)}
              </tbody>
            </table>
          </div>

          <div className="sc-fzoLsD RHdRK">
            <div className="sc-fzpans cKJzHK">
              <button
                onClick={handleClose}
                color="#fafafa"
                fontSize="12"
                size="56"
                className="sc-AxhCb etxXUI"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyPositionModal;
