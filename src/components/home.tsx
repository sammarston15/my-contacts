import React from 'react';

const Home: React.FC = () => {

//     let sortedContacts = data.sort();
//     console.log(sortedContacts)
//     let contactMap = sortedContacts.map((person: any) => {
//       return(
//         <div className='contact-list-card'>
//             {person.firstName} {person.lastName}
//         </div>
//     )
//   })

    return (
        <div className='home'>
            <div className="menu-container">
                <div>menu-container</div>
                <div className='menu-item'>All contacts</div>
                <div className='menu-item'>Groups</div>
            </div>
            <div className="contact-list-container">
                <div>contact-list-container</div>
                <div className="contact-list-card">contact name here*</div>
            </div>
            <div className="contact-info-container">
                contact-info-container
            </div>
        </div>
    )
}

export default Home;