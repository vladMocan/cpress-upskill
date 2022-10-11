export function usersPayload(type) {
    let createUsersPayload = {
        email: "vlad.mocan@test.com",
        username: "Unfair_Passenger",
        address: "NEW YORK 11",
        active: true,

    }

    switch (type) {
        case "create":
            return createUsersPayload;
        case "update":
            return {
                ...createUsersPayload, address: "SAN FARANCISCO"
            }
    }
}
