import React, {Fragment} from 'react';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

class StatRow extends React.Component {

    render() {
        return <Fragment>
            <li className="media">
            <div className="media-body">
                    <div className="media-title">{this.props.data.service}</div>
                    <div className="text-job text-muted">{this.props.data.typeService}</div>
                </div>
                
                <div className="media-items">
                    <div className="media-item">
                        <div className="media-value">{this.props.data.nbrSeance}</div>
                        <div className="media-label">Seance</div>
                    </div>
                    <div className="media-item">
                        <div className="media-value">{this.props.data.earning}</div>
                        <div className="media-label">MAD</div>
                    </div>
                    <div className="media-item">
                        <div className="media-value">{this.props.data.rating}</div>
                        <div className="media-label">{this.props.data.nbrRating}</div>
                    </div>
                 
                </div>
            </li>

            
        </Fragment>
    }
}

export default StatRow;