
<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
   </script>
    
<div class="min-h-screen flex items-center justify-center bg-green-400">
    <div class="max-w-md w-full space-y-8">
        <div>
            <img src="/logo.png" alt="Shipps" class="mx-auto h-12 w-auto" />
            <h2 class="mt-6 text-center text-4xl font-extrabold text-foreground">
                Log in to Shipps
            </h2>
            <p class="mt-2 text-center text-sm text-muted-foreground">
                Manage your shipments with ease and efficiency
            </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <Input
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>

            <div>
                <Button
                    type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    Sign in
                </Button>
            </div>
        </form>
    </div>
</div>
