// import { IUser } from "interfaces/IUser";
// import React from "react";

// interface UserTableProps {
//   users: IUser[];
// }

// const UserTable: React.FC<UserTableProps> = ({ users }) => {
//   return (
//     <table style={{ borderCollapse: "collapse", width: "100%" }}>
//       <thead>
//         <tr>
//           <th style={tableHeaderStyle}>Avatar</th>
//           <th style={tableHeaderStyle}>Name</th>
//           <th style={tableHeaderStyle}>Email</th>
//           <th style={tableHeaderStyle}>Phone</th>
//           <th style={tableHeaderStyle}>Verified</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index} style={tableRowStyle}>
//             <td style={tableCellStyle}>
//               <img src={user.avatar} alt={user.name} style={avatarStyle} />
//             </td>
//             <td style={tableCellStyle}>{user.name}</td>
//             <td style={tableCellStyle}>{user.email}</td>
//             <td style={tableCellStyle}>{user.phone}</td>
//             <td style={tableCellStyle}>
//               {user.verified ? (
//                 <span style={verifiedStyle}>Yes</span>
//               ) : (
//                 <span style={notVerifiedStyle}>No</span>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;

// const tableHeaderStyle: React.CSSProperties = {
//   padding: "10px",
//   textAlign: "left",
//   backgroundColor: "#293b5f",
//   color: "#FFF",
//   fontFamily: "Arial, Helvetica, sans-serif",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textTransform: "uppercase",
// };

// const tableRowStyle: React.CSSProperties = {
//   backgroundColor: "#FFF",
//   border: "1px solid #DDD",
// };

// const tableCellStyle: React.CSSProperties = {
//   border: "1px solid #DDD",
//   padding: "10px",
// };

// const avatarStyle: React.CSSProperties = {
//   borderRadius: "50%",
//   height: "50px",
//   width: "50px",
// };

// const verifiedStyle: React.CSSProperties = {
//   backgroundColor: "#DFF0D8",
//   borderRadius: "5px",
//   color: "#3C763D",
//   padding: "5px 10px",
// };

// const notVerifiedStyle: React.CSSProperties = {
//   backgroundColor: "#F2DEDE",
//   borderRadius: "5px",
//   color: "#A94442",
//   padding: "5px 10px",
// };

import { IUser } from "interfaces/IUser";
import React from "react";

interface UserTableProps {
  users: IUser[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr style={tableHeaderRowStyle}>
          <th style={tableHeaderCellStyle}>Avatar</th>
          <th style={tableHeaderCellStyle}>Name</th>
          <th style={tableHeaderCellStyle}>Email</th>
          <th style={tableHeaderCellStyle}>Phone</th>
          <th style={tableHeaderCellStyle}>Verified</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} style={tableRowStyle}>
            <td style={avatarCellStyle}>
              <img src={user.avatar} alt={user.name} style={avatarStyle} />
            </td>
            <td style={tableCellStyle}>{user.name}</td>
            <td style={tableCellStyle}>{user.email}</td>
            <td style={tableCellStyle}>{user.phone}</td>
            <td style={tableCellStyle}>
              {user.emailVerified ? (
                <span style={verifiedStyle}>Yes</span>
              ) : (
                <span style={notVerifiedStyle}>No</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

const tableStyle: React.CSSProperties = {
  borderCollapse: "collapse",
  margin: "auto",
  width: "97%",
};

const tableHeaderRowStyle: React.CSSProperties = {
  backgroundColor: "#293b5f",
  color: "#FFF",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "left",
};

const tableHeaderCellStyle: React.CSSProperties = {
  padding: "15px",
};

const tableRowStyle: React.CSSProperties = {
  backgroundColor: "#FFF",
  borderBottom: "1px solid #DDD",
  transition: "background-color 0.2s ease",
};

const tableCellStyle: React.CSSProperties = {
  color: "#555",
  padding: "12px 15px",
};

const avatarCellStyle: React.CSSProperties = {
  padding: "12px 15px",
  width: "100px",
};

const avatarStyle: React.CSSProperties = {
  borderRadius: "50%",
  display: "block",
  height: "60px",
  margin: "0 auto",
  width: "60px",
};

const verifiedStyle: React.CSSProperties = {
  backgroundColor: "#4CAF50",
  borderRadius: "5px",
  color: "#FFF",
  display: "inline-block",
  padding: "5px 10px",
  textTransform: "uppercase",
};

const notVerifiedStyle: React.CSSProperties = {
  backgroundColor: "#F44336",
  borderRadius: "5px",
  color: "#FFF",
  display: "inline-block",
  padding: "5px 10px",
  textTransform: "uppercase",
};
