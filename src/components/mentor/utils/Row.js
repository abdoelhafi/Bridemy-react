import React, {Fragment} from 'react';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;


class Row extends React.Component {

    typeOfCss(date) {
        const todate = new Date();
        const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
        const utcTodate = Date.UTC(todate.getFullYear(), todate.getMonth(), todate.getDate());
        if ((utcTodate - utcDate)>0) return "badge-secondary";
      
        const res = Math.floor((utcDate - utcTodate) / _MS_PER_DAY);
        console.log(date + " "+res);
        return res > 2 ? "badge-success" : "badge-warning";
      }
    

    render() {
        return <Fragment>

            <tr>
                <td>{this.props.data.mentee}</td>
                <td>{this.props.data.service}</td>
                <td>{this.props.data.typeService}</td>
                <td>{this.props.data.price}</td>
                <td>
                
                <div className={`badge ${this.typeOfCss(new Date(this.props.data.date))}`}>{this.props.data.date}</div>

                </td>

            </tr>
        </Fragment>
    }
}


export default Row;