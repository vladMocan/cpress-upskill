export function usersResponse(type) {
    let userResponse = {
        email: "vlad.mocan@test.com",
        username: "Unfair_Passenger",
        address: "NEW YORK 11",
        active: true,
        id: 1
    }

    switch (type) {
        case "create":
            return userResponse;
        case "update":
            return {
                ...userResponse, address: "SAN FARANCISCO",
            }
    }
}
