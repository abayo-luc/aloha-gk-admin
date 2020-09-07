import * as React from "react";
import {
  DateInput,
  Edit,
  // NullableBooleanInput,
  TextInput,
  PasswordInput,
  Toolbar,
  FormWithRedirect,
  required,
  email,
} from "react-admin";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

import Aside from "./components/Aside";
// import FullNameField from "./FullNameField";
// import SegmentsInput from "./SegmentsInput";
// import { validatePasswords } from "./VisitorCreate";

const VisitorEdit = (props) => {
  return (
    <Edit title={<VisitorTitle />} aside={<Aside />} component="div" {...props}>
      <VisitorForm />
    </Edit>
  );
};

const VisitorTitle = ({ record }) => <p>hello</p>;
//   record ? <FullNameField record={record} size="32" /> : null;

const VisitorForm = (props) => {
  return (
    <FormWithRedirect
      {...props}
      //   validate={validatePasswords}
      render={(formProps) => (
        <Card>
          <form>
            <CardContent>
              <Box display={{ md: "block", lg: "flex" }}>
                <Box flex={2} mr={{ md: 0, lg: "1em" }}>
                  <Typography variant="h6" gutterBottom>
                    Customer Identify
                  </Typography>
                  <Box display={{ xs: "block", sm: "flex" }}>
                    <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                      <TextInput
                        source="names"
                        resource="users"
                        validate={requiredValidate}
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                  <TextInput
                    type="email"
                    source="email"
                    resource="users"
                    validate={[email(), required()]}
                    fullWidth
                    variant="outlined"
                  />
                  <TextInput
                    type="phone"
                    source="phone"
                    resource="users"
                    validate={[required()]}
                    fullWidth
                    variant="outlined"
                  />
                  <Box display={{ xs: "block", sm: "flex" }}>
                    <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                      <DateInput
                        source="birthday"
                        resource="users"
                        fullWidth
                        helperText={false}
                        variant="outlined"
                      />
                    </Box>
                    <Box flex={2} ml={{ xs: 0, sm: "0.5em" }} />
                  </Box>

                  <Box mt="1em" />

                  <Typography variant="h6" gutterBottom>
                    Customer Address
                  </Typography>
                  <TextInput
                    source="address"
                    resource="users"
                    multiline
                    fullWidth
                    helperText={false}
                    variant="outlined"
                  />
                  <Box display={{ xs: "block", sm: "flex" }}>
                    <Box flex={2} mr={{ xs: 0, sm: "0.5em" }}>
                      <TextInput
                        source="district"
                        resource="users"
                        fullWidth
                        helperText={false}
                        variant="outlined"
                      />
                    </Box>
                    <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
                      <TextInput
                        source="sector"
                        resource="users"
                        fullWidth
                        helperText={false}
                        variant="outlined"
                      />
                    </Box>
                    <Box flex={2} ml={{ xs: 0, sm: "0.5em" }}>
                      <TextInput
                        source="cell"
                        resource="users"
                        fullWidth
                        helperText={false}
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  <Box mt="1em" />

                  <Typography variant="h6" gutterBottom>
                    Change Password
                  </Typography>
                  <Box display={{ xs: "block", sm: "flex" }}>
                    <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
                      <PasswordInput
                        source="password"
                        resource="users"
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                    <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
                      <PasswordInput
                        source="confirm_password"
                        resource="users"
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <Toolbar
              record={formProps.record}
              basePath={formProps.basePath}
              undoable={true}
              invalid={formProps.invalid}
              handleSubmit={formProps.handleSubmit}
              saving={formProps.saving}
              resource="users"
            />
          </form>
        </Card>
      )}
    />
  );
};

const requiredValidate = [required()];

export default VisitorEdit;
