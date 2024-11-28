import mongoose from 'mongoose';

// async function myConnection() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/adminUsers');
// }

const uri = "mongodb://127.0.0.1:27017/adminUsers";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(uri);
//     console.log('Conectado a la base de datos 🎉');
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//   }
// };

export function myConnection() {
  mongoose.connect(uri)
    .then(() => {
      console.log('Conectado a la base de datos 🎉');
    })
    .catch((err) => {
      console.error('Error al conectar a la base de datos:', err);
    })
}


// mongoose.connect(uri)
//   .then(() => {
//     console.log('Conectado a la base de datos 🎉');
//   })
//   .catch((err) => {
//     console.error('Error al conectar a la base de datos:', err);
//   })