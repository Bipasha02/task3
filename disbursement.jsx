import React, { useState, useEffect } from 'react';
import { auth } from './auth';

function FundDisbursement() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is not logged in
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <div>
          {/* here we can implement the component for fund disbursement */}
        </div>
      ) : (
        <p>You must be logged in to access this feature.</p>
      )}
    </div>
  );
}

export default FundDisbursement;
