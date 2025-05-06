import React from 'react'
import FilterBar from '../FilterBar/FilterBar'
import BookingTable from '../BookingTable/BookingTable'
import Pagination from '../Pagination/Pagination'
import './MainContent.scss'

function MainContent() {
    const sampleBookings = [
        { id: 1, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 2, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 3, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 4, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 5, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Cancelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 6, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Cancelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 7, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 8, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 9, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 10, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 11, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Travelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 12, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Travelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 11, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 12, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 13, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 14, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Confirmed', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 15, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Cancelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 16, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Cancelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 17, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 18, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', sourceIcon: true, bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 19, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 20, initial: 'A', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'boat', status: 'Vouchered', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 21, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Travelled', city: 'Melbourne', nationality: 'Airp IGI'},
        { id: 22, initial: 'M', agentName: 'ABC Pvt. Ltd.', accManager: 'Drishti Yadav', bookingSource: 'API', bookingId: 'AB_US_001', bookingDate: '03-02-2025', travelDate: '03-02-2025', leadPaxName: 'Rahul Sharma', paxDetails: '2A, 2C (4yrs, 8yrs)', productType: 'car', status: 'Travelled', city: 'Melbourne', nationality: 'Airp IGI'},
    ];

    const totalResults = 60;

    return (
        <>
            <FilterBar />
            <div className="main-content-inner">
                <BookingTable bookings={sampleBookings}/>
            </div>
            <div className="main-content-footer">
                <Pagination current={1} total={totalResults} perPage={sampleBookings.length} />
            </div>
        </>
    )
}

export default MainContent