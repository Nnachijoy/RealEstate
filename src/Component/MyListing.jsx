// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form } from 'react-bootstrap';
// import firstlistingimage from '../assets/firstlistingimage.png';
// import secondcardlisting from '../assets/secondcardlisting.png';
// import thirdcardlisting from '../assets/thirdcardlisting.png';
// import fourthcardlisting from '../assets/fourthcardlisting.png';
// import fifthcardlisting from '../assets/fifthcardlisting.png';
// import sixthcardlisting from '../assets/sixthcardlisting.png';
// import bath from '../assets/bath.png';
// import bed from '../assets/bed.png';
// import room from '../assets/room.png';
// import sqft from '../assets/sqft.png';
// import Search from '../assets/Search.png';
// import dropdown from '../assets/dropdown.png';

// const listingsContainerOne = [
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: firstlistingimage,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: secondcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: thirdcardlisting,
//   }
// ];

// const listingsContainerTwo = [
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: fourthcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: fifthcardlisting,
//   },
//   {
//     price: '$148,000',
//     address: 'Block 45, Rockvale manors, Apo, Abuja',
//     bed: '3 Beds',
//     room: '2 rooms',
//     bath: '2 Baths',
//     sqft: '150sqft',
//     image: sixthcardlisting,
//   }
// ];

// const MyListing = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     forSale: false,
//     price: false,
//     type: false,
//     more: false,
//     filter: false
//   });

//   const toggleDropdown = (dropdown) => {
//     setIsDropdownOpen(prevState => ({
//       ...prevState,
//       [dropdown]: !prevState[dropdown]
//     }));
//   };

//   return (
//     <div>
//       <div>MyListing</div>

//       <div className="filters-container container">
//         <div className="position-relative search-container ">
//           <img src={Search} alt="searchicon" className="search-icon" />
//           <Form.Control
//             className="custom-input pl-5"
//             placeholder="Search city, neighborhood, zip address"
//             aria-label="Search"
//           />
//         </div>

//         <div className=' bg-warning'>
//           <div className="dropdown-container">
//             <div className="dropdown">
//               <button onClick={() => toggleDropdown('forSale')} className="dropdown-button">
//                 ForSale
//                 <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
//               </button>
//               {isDropdownOpen.forSale && (
//                 <div className="dropdown-menu">
//                   <a href="#/action-1" className="dropdown-item">Action 1</a>
//                   <a href="#/action-2" className="dropdown-item">Action 2</a>
//                   <a href="#/action-3" className="dropdown-item">Action 3</a>
//                 </div>
//               )}
//             </div>

//             <div className="dropdown">
//               <button onClick={() => toggleDropdown('price')} className="dropdown-button">
//                 Price
//                 <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
//               </button>
//               {isDropdownOpen.price && (
//                 <div className="dropdown-menu">
//                   <a href="#/action-1" className="dropdown-item">Action 1</a>
//                   <a href="#/action-2" className="dropdown-item">Action 2</a>
//                   <a href="#/action-3" className="dropdown-item">Action 3</a>
//                 </div>
//               )}
//             </div>

//             <div className="dropdown">
//               <button onClick={() => toggleDropdown('type')} className="dropdown-button">
//                 Type
//                 <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
//               </button>
//               {isDropdownOpen.type && (
//                 <div className="dropdown-menu">
//                   <a href="#/action-1" className="dropdown-item">Action 1</a>
//                   <a href="#/action-2" className="dropdown-item">Action 2</a>
//                   <a href="#/action-3" className="dropdown-item">Action 3</a>
//                 </div>
//               )}
//             </div>

//             <div className="dropdown">
//               <button onClick={() => toggleDropdown('more')} className="dropdown-button">
//                 More
//                 <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
//               </button>
//               {isDropdownOpen.more && (
//                 <div className="dropdown-menu">
//                   <a href="#/action-1" className="dropdown-item">Action 1</a>
//                   <a href="#/action-2" className="dropdown-item">Action 2</a>
//                   <a href="#/action-3" className="dropdown-item">Action 3</a>
//                 </div>
//               )}
//             </div>

//             <div className="dropdown">
//               <button onClick={() => toggleDropdown('filter')} className="dropdown-button-filter">
//                 Filter
//                 <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
//               </button>
//               {isDropdownOpen.filter && (
//                 <div className="dropdown-menu">
//                   <a href="#/action-1" className="dropdown-item">Action 1</a>
//                   <a href="#/action-2" className="dropdown-item">Action 2</a>
//                   <a href="#/action-3" className="dropdown-item">Action 3</a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Container>
//         <Row>
//           {listingsContainerOne.map((listing, index) => (
//             <Col md={4} key={index}>
//               <Card className="card-custom">
//                 <img src={listing.image} alt="Send" className="furniture" />
//                 <button className='custom-button'>Sell</button>
//                 <div className='card-price'>{listing.price}</div>
//                 <div className='card-text'>{listing.address}</div>
//                 <div className="card-flex-container">
//                   <div className="card-flex-item">
//                     <img src={bed} alt="items" />
//                     <span className='card-span-items'>{listing.bed}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={room} alt="items" />
//                     <span className='card-span-items'>{listing.room}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={bath} alt="items" />
//                     <span className='card-span-items'>{listing.bath}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={sqft} alt="items" />
//                     <span className='card-span-items'>{listing.sqft}</span>
//                   </div>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       <Container className='mt-5'>
//         <Row>
//           {listingsContainerTwo.map((listing, index) => (
//             <Col md={4} key={index}>
//               <Card className="card-custom">
//                 <img src={listing.image} alt="Send" className="furniture" />
//                 <button className='custom-button'>Sell</button>
//                 <div className='card-price'>{listing.price}</div>
//                 <div className='card-text'>{listing.address}</div>
//                 <div className="card-flex-container">
//                   <div className="card-flex-item">
//                     <img src={bed} alt="items" />
//                     <span className='card-span-items'>{listing.bed}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={room} alt="items" />
//                     <span className='card-span-items'>{listing.room}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={bath} alt="items" />
//                     <span className='card-span-items'>{listing.bath}</span>
//                   </div>
//                   <div className="card-flex-item">
//                     <img src={sqft} alt="items" />
//                     <span className='card-span-items'>{listing.sqft}</span>
//                   </div>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default MyListing;


import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import firstlistingimage from '../assets/firstlistingimage.png';
import secondcardlisting from '../assets/secondcardlisting.png';
import thirdcardlisting from '../assets/thirdcardlisting.png';
import fourthcardlisting from '../assets/fourthcardlisting.png';
import fifthcardlisting from '../assets/fifthcardlisting.png';
import sixthcardlisting from '../assets/sixthcardlisting.png';
import bath from '../assets/bath.png';
import bed from '../assets/bed.png';
import room from '../assets/room.png';
import sqft from '../assets/sqft.png';
import Search from '../assets/Search.png';
import dropdown from '../assets/dropdown.png';
import sorry from '../assets/sorry.png';

const listingsContainerOne = [
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: firstlistingimage,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: secondcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: thirdcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fourthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: fifthcardlisting,
  },
  {
    price: '$148,000',
    address: 'Block 45, Rockvale manors, Apo, Abuja',
    bed: '3 Beds',
    room: '2 Rooms',
    bath: '2 Baths',
    sqft: '150sqft',
    image: sixthcardlisting,
  }
];

const MyListing = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    forSale: false,
    price: false,
    type: false,
    more: false,
    filter: false
  });

  const [selectedOption, setSelectedOption] = useState({
    forSale: 'For Sale',
    price: 'Price',
    type: 'Type',
    more: 'More',
    filter: 'Filter'
  });

  const [currentView, setCurrentView] = useState('Approved');

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  const selectDropdownItem = (dropdown, item) => {
    setSelectedOption(prevState => ({
      ...prevState,
      [dropdown]: item
    }));
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [dropdown]: false
    }));
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <h3>Sidebar</h3>
        <p>Content for the sidebar.</p>
        <p>My listing icon</p>
      </div>

      <div className="content">
        <div className='approved-unapproved-container mx-2'>
          <div 
            className={`approved ${currentView === 'Approved' ? 'active' : ''}`} 
            onClick={() => setCurrentView('Approved')}
          >
            Approved
          </div>
          <div 
            className={`unapproved ${currentView === 'Unapproved' ? 'active' : ''}`} 
            onClick={() => setCurrentView('Unapproved')}
          >
            Unapproved
          </div>
        </div>  
        
        <div className='my-listing mx-3'>My Listings</div>
        <div className="filters-container container mt-2">
          <div className="position-relative search-container">
            <img src={Search} alt="searchicon" className="search-icon" />
            <Form.Control
              className="custom-input pl-5"
              placeholder="Search city, neighborhood, zip address"
              aria-label="Search"
            />
          </div>
          <div>
            <div className="dropdown-container">
              <div className="dropdown">
                <button onClick={() => toggleDropdown('forSale')} className="dropdown-button">
                  {selectedOption.forSale}
                  <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
                </button>
                {isDropdownOpen.forSale && (
                  <div className="dropdown-menu">
                    <div onClick={() => selectDropdownItem('forSale', 'Action 1')} className="dropdown-item">Action 1</div>
                    <div onClick={() => selectDropdownItem('forSale', 'Action 2')} className="dropdown-item">Action 2</div>
                    <div onClick={() => selectDropdownItem('forSale', 'Action 3')} className="dropdown-item">Action 3</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button onClick={() => toggleDropdown('price')} className="dropdown-button">
                  {selectedOption.price}
                  <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
                </button>
                {isDropdownOpen.price && (
                  <div className="dropdown-menu">
                    <div onClick={() => selectDropdownItem('price', 'Action 1')} className="dropdown-item">Action 1</div>
                    <div onClick={() => selectDropdownItem('price', 'Action 2')} className="dropdown-item">Action 2</div>
                    <div onClick={() => selectDropdownItem('price', 'Action 3')} className="dropdown-item">Action 3</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button onClick={() => toggleDropdown('type')} className="dropdown-button">
                  {selectedOption.type}
                  <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
                </button>
                {isDropdownOpen.type && (
                  <div className="dropdown-menu">
                    <div onClick={() => selectDropdownItem('type', 'Action 1')} className="dropdown-item">Action 1</div>
                    <div onClick={() => selectDropdownItem('type', 'Action 2')} className="dropdown-item">Action 2</div>
                    <div onClick={() => selectDropdownItem('type', 'Action 3')} className="dropdown-item">Action 3</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button onClick={() => toggleDropdown('more')} className="dropdown-button">
                  {selectedOption.more}
                  <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
                </button>
                {isDropdownOpen.more && (
                  <div className="dropdown-menu">
                    <div onClick={() => selectDropdownItem('more', 'Action 1')} className="dropdown-item">Action 1</div>
                    <div onClick={() => selectDropdownItem('more', 'Action 2')} className="dropdown-item">Action 2</div>
                    <div onClick={() => selectDropdownItem('more', 'Action 3')} className="dropdown-item">Action 3</div>
                  </div>
                )}
              </div>
              <div className="dropdown">
                <button onClick={() => toggleDropdown('filter')} className="dropdown-button-filter">
                  {selectedOption.filter}
                  <img src={dropdown} alt="Dropdown Icon" className="dropdown-icon" />
                </button>
                {isDropdownOpen.filter && (
                  <div className="dropdown-menu">
                    <div onClick={() => selectDropdownItem('filter', 'Action 1')} className="dropdown-item">Action 1</div>
                    <div onClick={() => selectDropdownItem('filter', 'Action 2')} className="dropdown-item">Action 2</div>
                    <div onClick={() => selectDropdownItem('filter', 'Action 3')} className="dropdown-item">Action 3</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Render listings or text based on current view */}
        <Container>
          <Row>
            {currentView === 'Approved' ? (
              listingsContainerOne.map((listing, index) => (
                <Col md={4} key={index}>
                  <Card className="card-custom mt-3">
                    <img src={listing.image} alt="Send" className="furniture" />
                    <button className='custom-button'>Sell</button>
                    <div className='card-price'>{listing.price}</div>
                    <div className='card-text'>{listing.address}</div>
                    <div className="card-flex-container">
                      <div className="card-flex-item">
                        <img src={bed} alt="items" className='card-img' />
                        <span className='card-span-items'>{listing.bed}</span>
                      </div>
                      <div className="card-flex-item">
                        <img src={room} alt="items" className='card-img' />
                        <span className='card-span-items'>{listing.room}</span>
                      </div>
                      <div className="card-flex-item">
                        <img src={bath} alt="items" className='card-img' />
                        <span className='card-span-items'>{listing.bath}</span>
                      </div>
                      <div className="card-flex-item">
                        <img src={sqft} alt="items" className='card-img' />
                        <span className='card-span-items'>{listing.sqft}</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <Col md={4}>
                <div className="unapproved-content">
                  <div className='text-center mt-4'>
                <img src={sorry} alt="no-list-yet" className='sorry-image' />
                  <p className='not-approved'>No Approved List Yet!</p>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>

        <button className="fixed-add-list-button">Add a List</button>
      </div>
    </div>
  );
};

export default MyListing;




