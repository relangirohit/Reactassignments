import './Demo.css'
function Demo() {
 
    let usersArray = [
        { "id": 1, "Designation": "Heart Specialist", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg", "rating": 5 },
        { "id": 2, "Designation": "Psychologist", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg", "rating": 4 },
        { "id": 3, "Designation": "Neurosurgeon", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg", "rating": 3 },
        { "id": 4, "Designation": "Heart Specialist", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg", "rating": 5 },
        { "id": 5, "Designation": "Psychologist", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg", "rating": 2 },
        { "id": 6, "Designation": "Neurosurgeon", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg", "rating": 4 },
        { "id": 7, "Designation": "Heart Specialist", "first_name": "Tony", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg", "rating": 3 },
        { "id": 8, "Designation": "Psychologist", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg", "rating": 2},
    ];
 
 
    let resultsArray = usersArray.map((item, index) => {
        return <div className='card' key={index}>
            <img src={item.avatar} /> <br />
            <span>{item.first_name + " " + item.last_name}</span>  <br />
 
            <span className="designation">{item.Designation}</span>  <br />
            
            <span className="book">Book Appointment</span>⭐
        </div>;
    });
 
 
    return (
        <>
            <h3 style={{ color: "red", padding: "5px", textAlign: "center" }}>Assignment Reference Image</h3>
            <hr />
 
 
            {resultsArray}
 
 
        </>
    );
}
 
export default Demo;