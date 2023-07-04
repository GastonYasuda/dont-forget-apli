// import { db } from "./Config";
// import { collectionGroup, query, where, getDocs, collection, doc, getDoc } from "firebase/firestore";

// export const termo = async () => {

//     const docRef = doc(db, "cities", "SF");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // docSnap.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }





// export const todaColeccion = async () => {


//     const querySnapshot = await getDocs(collection(db, "user"));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());

//     });

// }



// export const taskss = async () => {

//     const museums = query(collectionGroup(db, 'tas'));
//     const querySnapshot = await getDocs(museums);
//     querySnapshot.forEach((doc) => {
//         // console.log(doc.id, ' => ', doc.data());
//         console.log(doc.id, '=>', doc.data());
//         // console.log(doc.data()["29/7/23"]);
//         // console.log(doc.data()["29/7/23"][0]);
//         // console.log(doc.data()["29/7/23"][1].name)
//     });
// }