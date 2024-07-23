/* eslint-disable react/prop-types */

const Overlay = ({ ready, setReady, intersection }) => {
  return (
    <>
      <div
        className={`fullscreen bg ${ready ? "ready" : "notready"} ${
          ready && "clicked"
        }`}
      >
        <img src="/assets/cloud.png" alt="cloudone" className="cloud-one" />
        <img src="/assets/cloud.png" alt="cloudone" className="cloud-two" />
        <div className="title">
          {intersection ? (
            <img
              src="/assets/gameover.png"
              alt="gameover"
              className="game-over"
            />
          ) : (
            <img src="/assets/title.png" alt="title" className="cloud-title" />
          )}
          <h5>Click to play</h5>
        </div>
        <div className="stack">
          <button
            onClick={() => {
              setTimeout(() => setReady(true), 200);
            }}
          >
            {intersection ? (
              <img
                src="/assets/refresh.png"
                alt="refresh"
                className="buttons"
              />
            ) : (
              <img src="/assets/play1.png" alt="play" className="buttons" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Overlay;
