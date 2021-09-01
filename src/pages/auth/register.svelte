<script>
    import { Card, FormField, TextField, Button, } from "attractions";
    import { KeyIcon, AtSignIcon, UserIcon, MapPinIcon, CalendarIcon, CreditCardIcon } from "svelte-feather-icons";

    let forename, surname, email, password, country, date_of_birth, verified, admin, security_key, license_number;
</script>

<Card outline>

    <div class="field">
        <TextField
            bind:value={forename}
            outline
            label="Forename"
            withItem
        >
            <UserIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField
            bind:value={surname}
            outline
            label="Surname"
            withItem
        >
            <UserIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField bind:value={email}
         outline
         label="Email"
         withItem
        >
            <AtSignIcon size="24" class="item" />
        </TextField>
    </div>
    <div class="field">
        <TextField
            type="password"
            bind:value={password}
            outline
            label="Password"
            withItem
        >
            <KeyIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField
        type="text"
            bind:value={license_number}
            outline
            label="License Number"
            withItem
        >
            <CreditCardIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField
            bind:value={country}
            outline
            label="Country"
            withItem
        >
            <MapPinIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField
        type="date"
            bind:value={date_of_birth}
            outline
            label="Date of Birth"
            withItem
        >
            <CalendarIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="field">
        <TextField
        type="integer"
            bind:value={security_key}
            outline
            label="Security Key"
            withItem
        >
            <KeyIcon size="24" class="item" />
        </TextField>
    </div>

    <div class="register-button">
        <Button on:click={() => console.log("HELLO")} filled>Register</Button>
    </div>
</Card>

<style>
    .register-button {
        float: right;
    }
    .field {
        margin-bottom: 3vh;
    }
</style>
