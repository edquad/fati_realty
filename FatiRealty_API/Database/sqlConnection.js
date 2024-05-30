const sql = require("mssql");
const genericPool = require("generic-pool");

// Create the connection configuration for SQL Server
const sqlConfig = {
    user: "edquad-PROD", // SQL Server username
    password: "VpandeAuth@1234#", // SQL Server password
    server: "edquadprodserver.database.windows.net", // SQL Server hostname or IP
   // port: 1433, // SQL Server port
    database: "FatiRealtyProd", // Database name to connect to
    options: {
      encrypt: true, // Required for Azure SQL, optional otherwise
      trustServerCertificate: true, // If your server uses a self-signed certificate, set to true
    },
  };

  // Connection factory for the pool
const factory = {
    create: () => {
      return new Promise((resolve, reject) => {
        const pool = new sql.ConnectionPool(sqlConfig);
  
        // Connect to SQL Server and return the pool
        pool.connect((err) => {
          if (err) {
            console.error("Unable to connect: " + err.message);
            reject(new Error(err.message));
          } else {
            console.log("Successfully connected to SQL Server");
            resolve(pool);
          }
        });
      });
    },
    destroy: (pool) => {
      return new Promise((resolve) => {
        pool.close((err) => {
          if (err) {
            console.error("Unable to disconnect: " + err.message);
          } else {
            console.log("Disconnected from SQL Server");
          }
          resolve(); // Always resolve on destroy
        });
      });
    },
    validate: (pool) => {
      return Promise.resolve(pool.connected); // Check if the pool is connected
    },
  };
  
  // Pool options
  const opts = {
    min: 2, // Minimum number of connections
    testOnBorrow: false, // Validate before borrowing
    acquireTimeoutMillis: 60000, // Timeout to acquire connection
    evictionRunIntervalMillis: 900000, // Check every 15 minutes for idle connections
    numTestsPerEvictionRun: 4, // Test only 4 connections every 15 minutes
    idleTimeoutMillis: 10800000, // Evict after 3 hours of idle time
  };
  
  // Create the connection pool
  const myPool = genericPool.createPool(factory, opts);
  
  // Function to execute SQL queries
  const query = (sqlText, bindParams = []) => {
    return new Promise((resolve, reject) => {
      // Acquire a connection from the pool
      myPool
        .acquire()
        .then((pool) => {
          // Create a new request to execute the query
          const request = new sql.Request(pool);
          
          // Bind parameters to the request if provided
          bindParams.forEach((param, index) => {
            request.input(`param${index}`, param);
          });
  
          // Execute the query
          request.query(sqlText, (err, result) => {
            if (err) {
              reject(new Error(err.message));
            } else {
              resolve(result.recordset); // Return the record set
            }
  
            // Release the connection back to the pool
            myPool.release(pool);
          });
        })
        .catch((err) => {
          reject(new Error(err.message));
        });
    });
  };

  // Function to execute stored procedures
const executeStoredProcedure = (procedureName, params) => {
  return new Promise((resolve, reject) => {
      // Acquire a connection from the pool
      myPool
      .acquire()
      .then((pool) => {
          // Create a new request to execute the stored procedure
          const request = pool.request();
          
          // Add parameters to the request
          for (const paramName in params) {
              if (params.hasOwnProperty(paramName)) {
                  request.input(paramName, params[paramName]);
              }
          }
          
          // Execute the stored procedure
          request.execute(procedureName, (err, result) => {
              if (err) {
                  reject(new Error(err.message));
              } else {
                  resolve(result.recordset); // Return the record set
              }

              // Release the connection back to the pool
              myPool.release(pool);
          });
      })
      .catch((err) => {
          reject(new Error(err.message));
      });
  });
};

  module.exports = { 
    query: query,
    executeStoredProcedure: executeStoredProcedure
   };