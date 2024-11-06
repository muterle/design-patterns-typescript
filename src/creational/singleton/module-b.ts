import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicA } from './module-a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Test Doe', age: 30 });
myDatabaseClassic.add({ name: 'Unit Doe', age: 20 });
myDatabaseClassic.show();
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log(myDatabaseClassicA === myDatabaseClassic);
