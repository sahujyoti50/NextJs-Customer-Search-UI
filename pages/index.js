import { useEffect, useState } from "react"

export default function Test() {
    const [displayLogin, setLogin] = useState(false);
    const [userData, setUserData] = useState([]);
    const [input, setInput] = useState('');

    const loginWithIdHandler = () => {
        setLogin(true);
    }
    const clickTheNumberHanlder = (number) => {
        setInput(input.concat(number));

    }
    // const deleteLastElement = () => {
    //     setInput(input.slice(0, -1));
    // }

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const posts = await res.json();
        setUserData(posts);
    }
    useEffect(() => {
        fetchData();
    }, [])
    const searchHandler = (input) => {
        const filteredData = userData.filter((datas) => { return datas.address.zipcode.includes(input) });
        setUserData(filteredData);
    }
    return (
        <div>
            <div className="body">
                <button className="button-73" onClick={loginWithIdHandler}>Login with membership Id</button>
                <button className="button-73">Become member</button>
            </div>
            <div >
                {displayLogin && <div className="login">
                    <input onChange={(e) => setInput(e.target.value)} className="input" value={input} />
                    <br></br>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('0')}>0</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('1')}>1</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('2')}>2</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('3')}>3</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('4')}>4</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('5')}>5</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('6')}>6</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('7')}>7</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('8')}>8</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('9')}>9</span>
                    <span className="button-73" onClick={() => clickTheNumberHanlder('-')}>-</span>
                    {/* <span className="button-73" onClick={deleteLastElement}>X</span> */}
                    <span className="button-73" onClick={() => { setInput(''); setUserData(userData) }}>C</span>
                    <button className="button-73" onClick={() => searchHandler(input)}>Submit</button>
                </div>}
                <div>
                    <h3 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'arial' }}>User List</h3>
                    {displayLogin && userData.map((data, index) => {

                        return (
                            <div key={index} className="card">
                                <p><b>User Id </b>{data.id}</p>
                                <p><b>User Name </b> {data.name}</p>
                                <p><b>User Email </b> {data.email}</p>
                                <p><b>User Address </b> {data.address.street}</p>
                                <p><b>User Zipcode </b> {data.address.zipcode}</p>
                                <p><b>User Phone </b>{data.phone}</p>
                                <p><b>User Website </b>{data.website}</p>
                                <p><b>User Company </b> {data.company.name}</p>
                            </div>)
                    })}

                </div>
            </div>
        </div>
    )
}