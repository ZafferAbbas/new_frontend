"use client";

import React, { useEffect, useState } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import { getUserInfo, editProfile, changePassword, inviteSubUser, toggleSubUserStatus } from "@/lib/services/userAuth";
import { getSubUserById } from "@/lib/services/subUser"; 
import { toast } from "sonner";
import withAuth from "@/lib/withAuth";

function Settings() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    email: "",
    confirmEmail: "",
    address: "",
    location: "",
    state: "",
    language: "",
    phoneNumber: "",
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [subUsers, setSubUsers] = useState([]);
  const [inviteEmail, setInviteEmail] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        if (response.data.status === 200) {
          const userData = response.data.data;
          setUserInfo(userData);

          // Fetch sub-user details
          const subUserDetails = await Promise.all(
            userData.subusers.map(async (subUserId) => {
              const subUserResponse = await getSubUserById({ _id: subUserId });
              if (subUserResponse.status === 200) {
                return subUserResponse.data;
              } else {
                console.error(`Failed to fetch sub-user with ID: ${subUserId}`);
                return null;
              }
            })
          );
          setSubUsers(subUserDetails.filter(subUser => subUser !== null));
        } else {
          toast.error("Failed to fetch user info");
        }
      } catch (error) {
        toast.error("Error fetching user info");
      }
    };

    fetchUserInfo();
  }, []);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSaveUserInfo = async () => {
    const { firstName, lastName, gender, birthMonth, birthDay, birthYear, email, address, location, state, language, phoneNumber } = userInfo;
    const dataToSend = {
      updates: {
        firstName,
        lastName,
        gender,
        birthday: `${birthMonth} ${birthDay}, ${birthYear}`,
        email,
        address,
        location,
        state,
        language,
        phoneNumber,
      }
    };

    try {
      const response = await editProfile(dataToSend);
      if (response.data.status === "success") {
        toast.success("User info updated successfully");
      } else {
        toast.error("Failed to update user info");
      }
    } catch (error) {
      toast.error("Error updating user info");
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      const response = await changePassword({ currentPassword, newPassword });
      if (response.status === 200) {
        toast.success("Password updated successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        toast.error("Failed to update password");
      }
    } catch (error) {
      toast.error("Error updating password");
    }
  };

  const handleInviteSubUser = async () => {
    try {
      const response = await inviteSubUser({ email: inviteEmail });
      if (response.status === 200) {
        toast.success("Invite sent successfully");

        // Fetch the new sub-user details
        const newSubUserResponse = await getSubUserById({ _id: response.data.newSubUserId });
        console.log(newSubUserResponse)
        if (newSubUserResponse.status === 200) {
          setSubUsers((prevSubUsers) => [...prevSubUsers, newSubUserResponse.data]);
        }

        setInviteEmail("");
      } else {
        toast.error("Failed to send invite");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error sending invite");
    }
  };

  const handleSubUserStatusToggle = async (subUserId, isActive) => {
    try {
      const response = await toggleSubUserStatus({ subUserId, isActive });
      if (response.status === 200) {
        setSubUsers((prevSubUsers) =>
          prevSubUsers.map((subUser) =>
            subUser._id === subUserId ? { ...subUser, isActive } : subUser
          )
        );
        toast.success("Sub-user status updated successfully");
      } else {
        toast.error("Failed to update sub-user status");
      }
    } catch (error) {
      toast.error("Error updating sub-user status");
    }
  };

  return (
    <div className="main-container">
      <SideMenu />
      <div className="overflow-hidden">
        <TopNavbar />
        <MainContent>
          <div className="container space-y-6">
            <div className="bg-[#060B28] rounded-[20px] p-6">
              <p className="text-lg font-bold text-white mb-6">Basic Info</p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
                <div>
                  <p className="text-xs font-bold mb-2">First Name</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="eg. Michael"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold mb-2">Last Name</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="eg. Jordan"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleUserInfoChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 text-white mb-4">
                <div>
                  <p className="text-xs font-bold mb-2">Gender</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="Male"
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold mb-2">Birth Date</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="February"
                    name="birthMonth"
                    value={userInfo.birthMonth}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="h-0 sm:h-4 font-bold mb-2"></p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="14"
                    name="birthDay"
                    value={userInfo.birthDay}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="h-0 sm:h-4 font-bold mb-2"></p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="2001"
                    name="birthYear"
                    value={userInfo.birthYear}
                    onChange={handleUserInfoChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
                <div>
                  <p className="text-xs font-bold mb-2">Email Address</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="eg. example@address.com"
                    name="email"
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold mb-2">Confirm Email</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="eg. example@address.com"
                    name="confirmEmail"
                    value={userInfo.confirmEmail}
                    onChange={handleUserInfoChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white mb-4">
                <div className="col-span-2">
                  <p className="text-xs font-bold mb-2">Address</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="42 Wallaby Way"
                    name="address"
                    value={userInfo.address}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div className="col-span-2 xs:col-span-1">
                  <p className="text-xs font-bold mb-2">Your Location</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="City"
                    name="location"
                    value={userInfo.location}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div className="col-span-2 xs:col-span-1">
                  <p className="h-0 xs:h-4 font-bold mb-2"></p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="State"
                    name="state"
                    value={userInfo.state}
                    onChange={handleUserInfoChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
                <div>
                  <p className="text-xs font-bold mb-2">Language</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="English"
                    name="language"
                    value={userInfo.language}
                    onChange={handleUserInfoChange}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold mb-2">Phone Number</p>
                  <input
                    className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                    placeholder="+1 941 867 5309"
                    name="phoneNumber"
                    value={userInfo.phoneNumber}
                    onChange={handleUserInfoChange}
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto cursor-pointer" onClick={handleSaveUserInfo}>
                SAVE
              </div>
            </div>
            <div className="bg-[#060B28] rounded-[20px] p-6">
              <p className="text-lg font-bold text-white mb-6">Change Password</p>
              <div className="text-white mb-4">
                <p className="text-xs font-bold mb-2">Current Password</p>
                <input
                  className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="text-white mb-4">
                <p className="text-xs font-bold mb-2">New Password</p>
                <input
                  className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="text-white mb-4">
                <p className="text-xs font-bold mb-2">Confirm New Password</p>
                <input
                  className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white mb-2">Password requirements</p>
                <p className="text-[#A0AEC0]">Please follow this guide for a strong password</p>
                <ul className="text-[#A0AEC0] text-sm list-inside list-[circle] pl-3 mb-2">
                  <li>One special character</li>
                  <li>Min 6 characters</li>
                  <li>One number (2 are recommended)</li>
                  <li>Change it often</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto cursor-pointer" onClick={handlePasswordChange}>
                UPDATE PASSWORD
              </div>
            </div>
            <div className="bg-[#060B28] rounded-[20px] p-6">
              <p className="text-lg font-bold text-white mb-2">Accounts</p>
              <p className="text-sm text-[#A0AEC0] mb-2">Here you can add and manage your employee permissions</p>
              <div className="pl-4">
                <div className="py-4 border-b">
                  <p className="text-white font-bold">New Employee</p>
                  <p className="text-sm text-[#A0AEC0] mb-2">Send an invite here to add an authorized employee.</p>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg bg-[#0e1535] text-white placeholder:text-[#A0AEC0] px-4 py-3 mb-4 xs:mb-0"
                      placeholder="eg. example@address.com"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                    />
                    <div className="xs:absolute top-0 right-1.5 bottom-0 grid place-items-center">
                      <div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto cursor-pointer" onClick={handleInviteSubUser}>
                        SEND INVITE
                      </div>
                    </div>
                  </div>
                </div>
                {subUsers.map((subUser) => (
                  <div key={subUser._id} className="py-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold">{subUser.name}</p>
                        <p className="text-sm text-[#A0AEC0] mb-2">{subUser.email}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="text-[#A0AEC0] text-xs">{subUser.isActive ? "Enabled" : "Disabled"}</p>
                        <div
                          className={`rounded-xl w-24 h-7 grid place-items-center text-[10px] text-white font-black cursor-pointer ${subUser.isActive ? "bg-red-500" : "bg-green-500"}`}
                          onClick={() => handleSubUserStatusToggle(subUser._id, !subUser.isActive)}
                        >
                          {subUser.isActive ? "DISABLE" : "ENABLE"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
}

export default withAuth(Settings);
// export default Settings;
