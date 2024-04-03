import fastify from "fastify";
import {serializerCompiler, validatorCompiler} from "fastify-type-provider-zod";
import {createEvent} from "./routes/create-event";
import {registerForEvent} from "./routes/register-for-event";
import {getEvent} from "./routes/get-event";
import {getAttendeeBadge} from "./routes/get-attendee-badge";

export const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler)

app.listen({port: 3333}).then(() => {
    console.log('[INFO] HTTP SERVER RUNNING')
})

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)