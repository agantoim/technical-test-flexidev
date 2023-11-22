/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './BaseCards.css';

function BaseCard({ cardName, contentTitle, contentData,  handleClick}) {
    return (
        <div className="card-container" onClick={handleClick}>
            <div className="card-title-name">{cardName}</div>
            <div className="card-content">
                <div className='card-content-title font-weight-600'>
                    {contentTitle.map((item, index) => (
                    <div key={index} className="card-content-item">
                        <div className="">{item}</div>
                    </div>
                    ))}
                </div>
                <div className='card-content-data'>
                    {contentData.map((item, index) => (
                    <div key={index} className="card-content-item">
                        <div className="">{item}</div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

BaseCard.propTypes = {
    cardName: PropTypes.string,
    contentTitle: PropTypes.node,
    contentData: PropTypes.node,
    handleClick: PropTypes.func,

}

export default BaseCard;