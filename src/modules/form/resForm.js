export const resDisplay = (value1, value2) => {

    const res = document.createElement('div');
    res.className = "resDiv";
    res.innerHTML = `${value1} <br><br> ${value2}`;

    document.querySelector('#main').appendChild(res);

}