import jwt from 'jsonwebtoken';

const token = jwt.sign({ id: '68009bffeb9fe39123f18ebf' }, '296b9cdc2f8089d4d7de27fc08630ad67ae03ac20597fe40dfa9f488673b9069bf51808fc502d4b4f387bc6053cad5c3e9726851cc60c71485e7e31bea00b8e5', {
  expiresIn: '1d'
});

console.log(token);
