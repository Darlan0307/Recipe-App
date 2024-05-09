"use server";

export const FetchRecipesRandom = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
