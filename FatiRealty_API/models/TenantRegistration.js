const sqlConnection = require("../Database/sqlConnection.js");
const bodyParser = require('body-parser');
const sql = require('mssql');
//const app = express();
const TenantRegistration = function () {};
const {
    test,
 
} = require("../tableName/test.js");



// TenantRegistration.TenantRegApi = (tenantData, cb) => {
//     const params = {
//         FirstName: tenantData.firstName,
//         LastName: tenantData.lastName,
//         PhoneNumber: tenantData.phoneNumber,
//         Email: tenantData.email,
//         PersonalNotes: tenantData.personalNotes,
//         UserID: tenantData.userID ,
//         WorkEmail: tenantData.workEmail,
//         WorkLocation : tenantData.workLocation ,
//         WorkNotes : tenantData.workNotes ,
//         FileName : tenantData.fileName  ,
//         FilePath : tenantData.filePath ,
//         DocumentNotes : tenantData.documentNotes
//     };



//     console.log(params)
//     sqlConnection.executeStoredProcedure('InsertTenantAllDetails', params)
//         .then(result => {
//             cb(null, { message: 'Successfully saved tenant data', data: result });
//         })
//         .catch(error => {
//             cb(error, null);
//         });
// };

// TenantRegistration.TenantRegApi = async (tenantData, cb) => {
//     try {
//         const result = await sqlConnection.executeStoredProcedure('InsertTenantAllDetails', {
//             FirstName: tenantData.firstName,
//             LastName: tenantData.lastName,
//             PhoneNumber: tenantData.phoneNumber,
//             Email: tenantData.email,
//             PersonalNotes: tenantData.personalNotes,
//             UserID: tenantData.userID,
//             WorkEmail: tenantData.workEmail,
//             WorkLocation: tenantData.workLocation,
//             WorkNotes: tenantData.workNotes,
//             FileName: tenantData.fileName,
//             FilePath: tenantData.filePath,
//             DocumentNotes: tenantData.documentNotes
//         });

//         // Respond with success message and inserted data
//         cb(null, { message: 'Tenant details inserted successfully', data: result });
//     } catch (error) {
//         console.error('Error inserting tenant details:', error);
//         cb(error, null);
//     }
// };

TenantRegistration.TenantRegApi = async (tenantData) => {
    const params = {
        FirstName: tenantData.firstName,
        LastName: tenantData.lastName,
        PhoneNumber: tenantData.phoneNumber,
        Email: tenantData.email,
        PersonalNotes: tenantData.personalNotes,
        UserID: tenantData.userID,
        WorkEmail: tenantData.workEmail,
        WorkLocation: tenantData.workLocation,
        WorkNotes: tenantData.workNotes,
        ssnnumber: tenantData.ssnnumber,
        FileName: tenantData.fileName,
        FilePath: tenantData.filePath,
        documentsNotes: tenantData.documentsNotes
    };

    try {
        const result = await sqlConnection.executeStoredProcedure('InsertTenantAllDetails', params);
        return { message: 'Successfully saved tenant data', data: result };
    } catch (error) {
        throw new Error('Error executing stored procedure: ' + error.message);
    }
};


module.exports = TenantRegistration;