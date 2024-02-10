const URL = `${process.env.NEXT_PUBLIC_API_URL}/newsletter`;

const postNewsletterEmail = async (data: string) => {
  try {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default postNewsletterEmail;
