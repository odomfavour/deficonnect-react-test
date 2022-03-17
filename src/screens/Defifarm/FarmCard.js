const FarmCard = ({ farmData }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="sc-fzqLLg doivlz">
        <div className="sc-fzoKki GoZkS">
          <div className="sc-fzoYkl gna-dsK">
            <div className="sc-fzoWqW cdKMsY">
              <h4 className="sc-fzoxnE kqIaqu">{farmData.label}</h4>
              <div className="sc-fznzqM bcGGPX">
                <div className="sc-fznOgF jisKTn">
                  Deposit {farmData.symbol} PANCAKE LP{" "}
                </div>
                <div className="sc-fzonjX hIMiPJ">
                  <span>APY</span>
                  <span>{farmData.apr}%</span>
                </div>
                {/* <div className="sc-fzonjX hIMiPJ">
                  <span>TVL: &nbsp; </span>
                  <span>0</span>
                </div> */}
              </div>
              <div className="sc-fzozJi dZjuQi" size="24"></div>
            </div>
            <div className="sc-fznXWL cEvDCP">
              <button
                color="rgb(67,210,255)"
                fontSize="12"
                size="56"
                className="sc-AxhCb etxXUI"
              >
                <a className="sc-AxhUy hhuDcs" href={'/defifarm/' + farmData.ticker}>
                  Deposit
                </a>
              </button>
              <div className="sc-fzozJi dZjuQi" size="24"></div>
              <button
                color="rgb(67,210,255)"
                fontSize="12"
                size="56"
                className="sc-AxhCb etxXUI"
              >
                <a
                  href={farmData.infoLink}
                  target="__blank"
                  className="sc-AxgMl eAkvDu"
                >
                  Get Info
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmCard
