import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (data: any) => {

		const { firstName, lastName, email, password, verifyPassword } = data.formData;
		const { phone, gender } = data;


		const success = handleInputErrors({ firstName, lastName, email, password, verifyPassword, phone, gender});
		if (!success) return;
		
		setLoading(true);
		try {
			const res = await axios.post("/api/auth/register", {
				firstName,
				lastName,
				email,
				password,
				verifyPassword,
				phone,
				gender
			})
			
			if (res.data.status === 402) {
				throw new Error(res.data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(res.data.token));
			setAuthUser(res.data.token);
		} catch (error: any) {
			toast.error(`Something went wrong test: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ Name, email, password, verifyPassword, gender }: any) {
	if (!Name || !email || !password || !verifyPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== verifyPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
