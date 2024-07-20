import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './itemform.css';

const ItemForm = ({item, onSuccess}) =>{
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [subdiv, setSubdiv] = useState('');
    const [brgy, setBrgy] = useState('');
    const [city, setCity] = useState('');
    const [prov, setProv] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bday, setBday] = useState('');
    const [bday_loc, setBLoc] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [cship, setCship] = useState('');
    const [civil, setCivil] = useState('');
    const [father_fname, setFFname] = useState('');
    const [father_mname, setFFmname] = useState('');
    const [father_sname, setFFsname] = useState('');
    const [mother_fname, setMFname] = useState('');
    const [mother_mname, setMFmname] = useState('');
    const [mother_sname, setMFsname] = useState('');


    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setAddress(item.address);
            setStreet(item.street);
            setSubdiv(item.subdiv);
            setBrgy(item.brgy);
            setCity(item.city);
            setProv(item.prov);
            setZipcode(item.zipcode);
            setBLoc(item.bday_loc);
            setSex(item.sex);
            setHeight(item.height);
            setWeight(item.weight);
            setCship(item.cship);
            setCivil(item.civil);
            setFFname(item.father_fname);
            setFFmname(item.father_mname);
            setFFsname(item.father_sname);
            setMFname(item.mother_fname);
            setMFmname(item.mother_mname);
            setMFsname(item.mother_sname);
            setEmail(item.email);
            setPhone(item.phone);
            setBday(item.bday);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {first_name, middle_name, last_name, address, street, subdiv, brgy, city, prov, zipcode, email, phone, bday, bday_loc, sex, height, 
                    weight, cship, civil, father_fname, father_mname, father_sname, mother_fname, mother_mname, mother_sname};
        try {
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error)
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h1>Enter the Data</h1>
                <div className='field'>
                    <label>First Name:</label>
                    <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Middle Name:</label>
                    <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Last Name:</label>
                    <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)}/>
                </div>
                <h2>Residential Address</h2>
                <div className='field'>
                    <label>House/Block/Lot No:</label>
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Street:</label>
                    <input type='text' value={street} onChange={(e) => setStreet(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Subdivision/Village:</label>
                    <input type='text' value={subdiv} onChange={(e) => setSubdiv(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Barangay:</label>
                    <input type='text' value={brgy} onChange={(e) => setBrgy(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>City/Municipality:</label>
                    <input type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Province:</label>
                    <input type='text' value={prov} onChange={(e) => setProv(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Zipcode:</label>
                    <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Phone:</label>
                    <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Date of Birth:</label>
                    <input type='tel' value={bday} onChange={(e) => setBday(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Place of Birth:</label>
                    <input type='tel' value={bday_loc} onChange={(e) => setBLoc(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Sex:</label>
                    <input type='tel' value={sex} onChange={(e) => setSex(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Civil Status:</label>
                    <input type='tel' value={civil} onChange={(e) => setCivil(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Citizenship:</label>
                    <input type='tel' value={cship} onChange={(e) => setCship(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Height:</label>
                    <input type='tel' value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div className='field'>
                    <label>Weight:</label>
                    <input type='tel' value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>
                <h1>Family Background</h1>
                <div className='field'>
                    <label> Father's Surname:</label>
                    <input type='tel' value={father_sname} onChange={(e) => setFFsname(e.target.value)}/>
                </div>
                <div className='field'>
                    <label> Father's First Name:</label>
                    <input type='tel' value={father_fname} onChange={(e) => setFFname(e.target.value)}/>
                </div>
                <div className='field'>
                    <label> Father's Middle Name:</label>
                    <input type='tel' value={father_mname} onChange={(e) => setFFmname(e.target.value)}/>
                </div>
                <div className='field'>
                    <label> Mother's Surname:</label>
                    <input type='tel' value={mother_sname} onChange={(e) => setMFsname(e.target.value)}/>
                </div>
                <div className='field'>
                    <label> Mother's First Name:</label>
                    <input type='tel' value={mother_fname} onChange={(e) => setMFname(e.target.value)}/>
                </div>
                <div className='field'>
                    <label> Mother's Middle Name:</label>
                    <input type='tel' value={mother_mname} onChange={(e) => setMFmname(e.target.value)}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );

};
export default ItemForm;