

export const useLogin = (data) => {
    
    const handleArrowUpClick = async (data) => {
        let res = await axios.post("http://localhost:4000/vote/up", data);
      };

    return {handleArrowUpClick};
}