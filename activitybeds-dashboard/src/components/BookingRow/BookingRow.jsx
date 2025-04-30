import React from 'react';
import './BookingRow.scss';

function BookingRow({booking}) {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'confirmed': return 'status-confirmed';
            case 'cancelled': return 'status-cancelled';
            case 'vouchered': return 'status-vouchered';
            case 'travelled': return 'status-travelled';
            default: return '';
        }
    };

    const getInitialClass = (initial) => {
        return initial === 'M' ? 'initial-m' : 'initial-a';
    }

    const getProductIcon = (type) => {
        if (type === 'boat') return '⛵';
        if (type === 'car') return '🚗';
        return '?';
    }

    return (
        <tr>
            <td>
                <span className={`initial-icon ${getInitialClass(booking.initial)}`}>
                    {booking.initial}
                </span>
            </td>
            <td>
                <div className="agent-name">{booking.agentName}</div>
                <div className="acc-manager">Acc. Manager - {booking.accManager}</div>
            </td>
            <td>
                {booking.sourceIcon ? <span className="api-icon">API</span> : booking.bookingSource}
            </td>
            <td className="booking-id">{booking.bookingId}</td>
            <td>{booking.bookingDate}</td>
            <td>{booking.travelDate}</td>
            <td>
                <div className="pax-name">{booking.leadPaxName}</div>
                <div className="pax-details">{booking.paxDetails}</div>
            </td>
            <td>
                <span className={`product-icon ${booking.productType === 'boat' ? 'icon-boat' : 'icon-car'}`}>
                    {getProductIcon(booking.productType)}
                </span>
            </td>
            <td>
                <span className={`status-badge ${getStatusClass(booking.status)}`}>
                {booking.status} ▼ 
                </span>
            </td>
            <td>{booking.city}</td>
            <td>{booking.nationality}</td>
        </tr>
    )
}

export default BookingRow