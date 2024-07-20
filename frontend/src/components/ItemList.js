import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './itemlist.css';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className='item-list'>
            <h1>Records</h1>
            <ul className='list-container'>
                {items.map(item => (
                    <li key={item.id}>
                        
                        <label>
                            <strong>    
                                First Name: 
                            </strong> {item.first_name}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Middle Name:
                            </strong>  {item.middle_name}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Surname:
                            </strong>  {item.last_name}
                        </label> <br></br>

                        <strong>RESIDENTIAL ADDRESS</strong><br></br>

                        <label>
                            <strong>    
                                House/Block/Lot No:
                            </strong> {item.address}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Street:
                            </strong> {item.street}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Subdivision/Village:
                            </strong> {item.subdiv}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Barangay:
                            </strong> {item.brgy}
                        </label> <br></br>

                        <label>
                            <strong>    
                                City/Municipality:
                            </strong> {item.city}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Province:
                            </strong> {item.prov}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Zipcode:
                            </strong> {item.zipcode}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Email: 
                            </strong> {item.email}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Phone Number: 
                            </strong> {item.phone}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Date of Birth: 
                            </strong> {item.bday}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Place of Birth: 
                            </strong> {item.bday_loc}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Sex: 
                            </strong> {item.sex}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Civil Status: 
                            </strong> {item.civil}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Citizenship: 
                            </strong> {item.cship}
                        </label> <br></br>

                        <label>
                            <strong>    
                                Height: 
                            </strong> {item.height}
                        </label> <br></br>

                        <label>
                            <strong>    
                               Weight: 
                            </strong> {item.weight}
                        </label> <br></br>

                        <h1>Family Background</h1> <br></br>
                        
                        <label>
                            <strong>    
                            Father's Surname:
                            </strong> {item.father_sname}
                        </label> <br></br>

                        <label>
                            <strong>    
                            Father's First Name: 
                            </strong> {item.father_fname}
                        </label> <br></br>

                        <label>
                            <strong>    
                            Father's Middle Name:
                            </strong> {item.father_mname}
                        </label> <br></br>

                        <label>
                            <strong>    
                            Mother's Surname:
                            </strong> {item.mother_sname}
                        </label> <br></br>

                        <label>
                            <strong>    
                            Mother's First Name: 
                            </strong> {item.mother_fname}
                        </label> <br></br>

                        <label>
                            <strong>    
                            Mother's Middle Name:
                            </strong> {item.mother_mname}
                        </label> <br></br>

                        <button onClick={()=> onEdit(item)}>Edit</button>
                        <button onClick={()=> onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default ItemList;