import { createContext, useState, useEffect } from "react";

export const MemberContext = createContext();

// eslint-disable-next-line react/prop-types
export const MemberProvider = ({ children }) => {
  const [selectedMember, setSelectedMember] = useState(() => {
    const savedMember = localStorage.getItem("selectedMember");
    return savedMember ? JSON.parse(savedMember) : null;
  });

  useEffect(() => {
    if (selectedMember) {
      localStorage.setItem("selectedMember", JSON.stringify(selectedMember));
    } else {
      localStorage.removeItem("selectedMember");
    }
  }, [selectedMember]);

  return (
    <MemberContext.Provider value={{ selectedMember, setSelectedMember }}>
      {children}
    </MemberContext.Provider>
  );
};
