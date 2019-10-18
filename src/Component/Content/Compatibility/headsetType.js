import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Page from '../../Page/page';


const paragraphs = [
    'aaa',
 <div><table className="regularTable">
 <tr>
   <th>Company</th>
   <th>Contact</th>
   <th>Country</th>
 </tr>
 <tr>
   <td>Alfreds Futterkiste</td>
   <td>Maria Anders</td>
   <td>Germany</td>
 </tr>
 <tr>
   <td>Berglunds snabbköp</td>
   <td>Christina Berglund</td>
   <td>Sweden</td>
 </tr>
 <tr>
   <td>Centro comercial Moctezuma</td>
   <td>Francisco Chang</td>
   <td>Mexico</td>
 </tr>
 <tr>
   <td>Ernst Handel</td>
   <td>Roland Mendel</td>
   <td>Austria</td>
 </tr>
 <tr>
   <td>Island Trading</td>
   <td>Helen Bennett</td>
   <td>UK</td>
 </tr>
 <tr>
   <td>Königlich Essen</td>
   <td>Philip Cramer</td>
   <td>Germany</td>
 </tr>
 <tr>
   <td>Laughing Bacchus Winecellars</td>
   <td>Yoshi Tannamuri</td>
   <td>Canada</td>
 </tr>
 <tr>
   <td>Magazzini Alimentari Riuniti</td>
   <td>Giovanni Rovelli</td>
   <td>Italy</td>
 </tr>
 <tr>
   <td>North/South</td>
   <td>Simon Crowther</td>
   <td>UK</td>
 </tr>
 <tr>
   <td>Paris spécialités</td>
   <td>Marie Bertrand</td>
   <td>France</td>
 </tr>
</table></div>, 
 'ccc']

const HeadsetType = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Sekcja o produktach"
            paragraphs={paragraphs}
        />
        </div>
    );
}
 
ReactDOM.render(
    <HeadsetType/>,
    document.querySelector('#root')
);

export default HeadsetType;