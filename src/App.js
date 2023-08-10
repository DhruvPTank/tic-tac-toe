// const App = () => {
//     const source = [
//         { name: "Dhruv", lastName: "Tank" },
//         { name: "Chaitanya", lastName: "Tank" }
//     ];
//     const source2 = [
//         { name: "Ranjanben", lastName: "Tank" },
//         { name: "Prakashbhai", lastName: "Tank" }
//     ]
//     return (
//         <div style={{
//             display: 'flex',
//             backgroundColor: 'orange',
//             padding: '16px'
//         }}>
//             <List source={source} />
//             <List source={source2} />
//         </div>
//     )
// }

// const List = (props) => {
//     const { source } = props;
//     return (
//         <div>
//             {source && source.map((e, i) => <div style={{
//                 color: 'white',
//                 marginLeft: '8px'
//             }} key={i}>
//                 <p>{e.name + ' ' + e.lastName}</p>
//             </div>

//             )}
//         </div>
//     )
// }

// export default App;