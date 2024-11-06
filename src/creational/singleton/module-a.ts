//import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';

//const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'John Doe', age: 30 });
myDatabaseClassic.add({ name: 'Jane Doe', age: 20 });
myDatabaseClassic.show();
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
