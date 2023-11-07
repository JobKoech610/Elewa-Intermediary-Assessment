import { useKeyFiguresData } from '../ViewModels/useKeyFiguresData';
import "../Styles/KeyFigure.css"

//Landing component
const KeysFigures: React.FC = () => {
  const KeysFiguresData = useKeyFiguresData();
  console.log(KeysFiguresData);

  return (
    <div>
      {KeysFiguresData ? (
        <>
        <div className='keyfigureContainer'>
            <h2>Key figures</h2>
            <div className='keyfigureCards'>
                <div className='cardOne'>
                    <div>
                        <div className='cardText'>
                            <h1>
                                {KeysFiguresData.cardOneNum}
                            </h1>
                            <p>{KeysFiguresData.cardOneText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardTwo'>
                    <div>
                        <div className='cardText'>
                            <h1>
                                {KeysFiguresData.cardTwoNum}
                            </h1>
                            <p>{KeysFiguresData.cardTwoText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardThree'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardThreeNum}</h1>
                            <p>{KeysFiguresData.cardThreeText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardFour'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardFourNum}</h1>
                            <p>{KeysFiguresData.cardFourText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardFive'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardFiveNum}</h1>
                            <p>{KeysFiguresData.cardFiveText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardSix'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardSixNum}</h1>
                            <p>{KeysFiguresData.cardSixText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardSeven'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardSevenNum}</h1>
                            <p>{KeysFiguresData.cardSevenText}</p>
                        </div>
                    </div>
                </div>

                <div className='cardEight'>
                    <div>
                        <div className='cardText'>
                            <h1>{KeysFiguresData.cardEightNum}</h1>
                            <p>{KeysFiguresData.cardEightText}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
       
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default KeysFigures;
