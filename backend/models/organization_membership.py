from pydantic import BaseModel
from .public_user import PublicUser
from .academics import Term

__authors__ = ["Alanna Zhang, Alexander Feng"]
__copyright__ = "Copyright 2024"
__license__ = "MIT"


class OrganizationMembership(BaseModel):
    """Pydantic model to represent an organization member in the roster."""

    id: int | None = None
    user: PublicUser
    organization_id: int
    organization_name: str
    organization_slug: str
    title: str = "Member"
    is_admin: bool = False
    term: Term


class OrganizationMembershipRegistration(BaseModel):
    """Pydantic model for creating a new membership"""

    id: int | None = None
    user_id: int
    organization_id: int
    title: str = "Member"
    is_admin: bool = False
    term_id: str | None = None
