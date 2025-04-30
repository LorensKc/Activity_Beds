import React from 'react';
import BookingRow from '../BookingRow/BookingRow';
import './BookingTable.scss';

function BookingTable({bookings}) {
    const headers = [
        { id: 'booking_status_initial', label: 'Booking Status' },
        { id: 'agent', label: 'Agent' },
        { id: 'booking_source', label: 'Booking Source' },
        { id: 'booking_id', label: 'Booking ID' },
        { id: 'booking_date', label: 'Booking Date' },
        { id: 'travel_date', label: 'Travel date' },
        { id: 'lead_pax_name', label: 'Lead Pax Name' },
        { id: 'product_type', label: 'Product Type' },
        { id: 'booking_status_badge', label: 'Booking Status' },
        { id: 'product_city', label: 'Product City' },
        { id: 'nationality', label: 'Nationality' }
    ];

    return (
        <div className="table-container">
            <table className="booking-table">
                <thead>
                    <tr>
                        {headers.map(header => <th key={header.id}>{header.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking =>(
                        <BookingRow key={booking.id} booking={booking}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BookingTable