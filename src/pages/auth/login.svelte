<script>
    import { Card, FormField, TextField, Button } from "attractions";
    import { KeyIcon, AtSignIcon } from "svelte-feather-icons";

    let email, password;
</script>

<Card outline>
    <div class="field">
        <TextField bind:value={email} outline label="Email" withItem>
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
    <div class="login-button">
        <Button on:click={() => console.log("HELLO")} filled>Login</Button>
    </div>
</Card>

<style>
    .login-button {
        float: right;
    }
    .field {
        margin-bottom: 3vh;
    }
</style>
