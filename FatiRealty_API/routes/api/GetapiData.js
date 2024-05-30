const datalayer = require('./../../models/datalayer.js');

module.exports = {

  //   TDRECENCYMETRICSData: (req, res, next) => {
  //   // retrieve & send data for trips by month
  //   datalayer.TDRECENCYMETRICSData( (err, data) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.send(data)
  //     }
  //   });
  // },
  Recency_GetTile1Data: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile1Data( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
       return res.send(data)
      }
    });
  },

  Recency_GetTile2Data: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile2Data( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetTile3Data: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile3Data( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetTile3GridData: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile3GridData( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetTile4Data: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile4Data( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetTile4GridData: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetTile4GridData( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetGrid1: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetGrid1( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  Recency_GetGrid2BytableName: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.Recency_GetGrid2BytableName(req.TD_TABLE_NAME, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },

  getTucsonDataReport: (req, res, next) => {
    // retrieve & send data for trips by month
    datalayer.getTucsonDataReport( (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        return res.send(data)
      }
    });
  },
//------------------------------------------UCA-APP------------------------------------------------------------------
UCAAPP_GetTileData: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.UCAAPP_GetTileData( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

UCAAPP_GetOPPROCESSCONSTANT: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.UCAAPP_GetOPPROCESSCONSTANT( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

// UCAAPP_GetOPPROCESSCONSTANTByDate: (req, res, next) => {
//   // retrieve & send data for trips by month
//   datalayer.UCAAPP_GetOPPROCESSCONSTANTByDate( (err, data) => {
//     if (err) {
//       next(err);
//     } else {
//       res.send(data)
//     }
//   });
// },

//---------------------------insides--------------------------------------------------------//
Insides_GetAccountUsage_Schema: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.Insides_GetAccountUsage_Schema( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},
//---------------------------insides closed-------------------------------------------------//
Uca_Cell_GetCountryList: (req, res, next) => {
  // retrieve & send data for trips by month
 
  datalayer.Uca_Cell_GetCountryList( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {

      return res.send(data)
    }
  });
},

Uca_Cell_Getsegment_desc: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.Uca_Cell_Getsegment_desc( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

Uca_Cell_GetFISCAL_QUARTER: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.Uca_Cell_GetFISCAL_QUARTER( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

Uca_Cell_GetFISCAL_YEAR: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.Uca_Cell_GetFISCAL_YEAR( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

Uca_Cell_Getmarket_generation: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.Uca_Cell_Getmarket_generation( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

configurationGetBUData: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.configurationGetBUData( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

configurationGetblaneytucsonmetadataconfig: (req, res, next) => {
  // retrieve & send data for trips by month
  datalayer.configurationGetblaneytucsonmetadataconfig( (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data)
    }
  });
},

}
